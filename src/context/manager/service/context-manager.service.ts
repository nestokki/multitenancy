import { Inject, Injectable } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';
import { Nullable } from 'src/common/type/native.type';
import { RequestContext } from 'src/context/type/request-context.type';
import { REQUEST_CONTEXT_ALS } from 'src/factory/als/token/request-context-als.token';

@Injectable()
export class ContextManagerService {
  constructor(
    @Inject(REQUEST_CONTEXT_ALS)
    private readonly requestContextAls: AsyncLocalStorage<RequestContext>,
  ) {}

  run<T>(ctx: RequestContext, callback: () => T | Promise<T>): T | Promise<T> {
    return this.requestContextAls.run(ctx, callback);
  }

  get(): Nullable<RequestContext> {
    return this.requestContextAls.getStore() ?? null;
  }

  set<K extends keyof RequestContext>(key: K, value: RequestContext[K]): void {
    const ctx = this.requestContextAls.getStore();

    if (ctx) ctx[key] = value;
  }
}
