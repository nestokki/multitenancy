import { ForbiddenException, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { ContextResolver } from '../../context/resolver/context.resolver';
import { ContextService } from '../../context/service/context.service';
import { extractSubdomain } from 'src/context/util/extract-subdomain';

@Injectable()
export class RequestContextMiddleware implements NestMiddleware {
  constructor(
    private readonly contextResolver: ContextResolver[],
    private readonly contextService: ContextService,
  ) {}

  use(req: Request, res: Response, next: NextFunction): void | Promise<void> {
    for (const resolver of this.contextResolver) {
      const context = resolver.resolve(extractSubdomain(req));

      return this.contextService.run(context, () => next());
    }
  }
}
