import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { ContextManagerService } from 'src/context/manager/service/context-manager.service';
import { RequestContextResolver } from 'src/context/resolver/interface/request-context-resolver.interface';
import { CONTEXT_RESOLVERS } from 'src/context/resolver/token/context-resolvers.token';
import { extractSubdomain } from 'src/context/util/extract-subdomain.util';

@Injectable()
export class RequestContextMiddleware implements NestMiddleware {
  constructor(
    @Inject(CONTEXT_RESOLVERS) private readonly RequestContextResolvers: RequestContextResolver[],
    private readonly contextManagerService: ContextManagerService,
  ) {}

  use(req: Request, res: Response, next: NextFunction): void | Promise<void> {
    for (const resolver of this.RequestContextResolvers) {
      const context = resolver.resolve(extractSubdomain(req));

      return this.contextManagerService.run(context, () => next());
    }
  }
}
