import { Injectable } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';
import { Nullable } from 'src/common/type/native.type';
import { RequestContext } from 'src/context/type/request-context.type';

@Injectable()
export class ContextService {
  constructor(private readonly als: AsyncLocalStorage<RequestContext>) {}

  run<T>(ctx: RequestContext, callback: () => T | Promise<T>): T | Promise<T> {
    return this.als.run(ctx, callback);
  }

  get(): Nullable<RequestContext> {
    return this.als.getStore() ?? null;
  }

  set<K extends keyof RequestContext>(key: K, value: RequestContext[K]): void {
    const ctx = this.als.getStore();

    if (ctx) ctx[key] = value;
  }
}
