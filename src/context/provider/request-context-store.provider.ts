import { Provider } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';
import { RequestContext } from '../type/request-context.type';

const requestContextStore = new AsyncLocalStorage<RequestContext>();

const REQUEST_CONTEXT_STORE = Symbol('REQUEST_CONTEXT_STORE');

export const RequestContextStoreProvider: Provider = {
  provide: REQUEST_CONTEXT_STORE,
  useValue: requestContextStore,
};
