import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { CONTEXT_RESOLVERS } from 'src/core/middleware/context/resolver/factory/token/context-resolvers.token';
import { extractSubdomain } from 'src/core/middleware/context/util/extract-subdomain.util';
import { RequestContextService } from 'src/infra/als/request/service/request-context.service';
import { RequestContextResolver } from './context/interface/request-context-resolver.interface';

@Injectable()
export class RequestContextMiddleware implements NestMiddleware {
  constructor(
    @Inject(CONTEXT_RESOLVERS) private readonly requestContextResolvers: RequestContextResolver[],
    private readonly requestContextService: RequestContextService,
  ) {}

  use(req: Request, res: Response, next: NextFunction): void | Promise<void> {
    const subdomain = extractSubdomain(req);

    for (const resolver of this.requestContextResolvers) {
      if (resolver.canResolve(subdomain)) {
        const context = resolver.resolve(subdomain);

        return this.requestContextService.run(context, () => next());
      }
    }
  }
}
