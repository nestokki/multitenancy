import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { ContextManagerService } from 'src/context/manager/service/context-manager.service';
import { ContextResolverService } from 'src/context/resolver/service/context-resolver.service';
import { CONTEXT_RESOLVERS } from 'src/context/resolver/token/context-resolvers.token';
import { extractSubdomain } from 'src/context/util/extract-subdomain.util';

@Injectable()
export class RequestContextMiddleware implements NestMiddleware {
  constructor(
    @Inject(CONTEXT_RESOLVERS) private readonly contextResolverServices: ContextResolverService[],
    private readonly contextManagerService: ContextManagerService,
  ) {}

  use(req: Request, res: Response, next: NextFunction): void | Promise<void> {
    for (const resolver of this.contextResolverServices) {
      const context = resolver.resolve(extractSubdomain(req));

      return this.contextManagerService.run(context, () => next());
    }
  }
}
