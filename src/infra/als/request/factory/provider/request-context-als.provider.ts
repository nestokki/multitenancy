import { Provider } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';
import { RequestContext } from 'src/core/middleware/context/type/request-context.type';
import { REQUEST_CONTEXT_ALS } from '../token/request-context-als.token';

export const RequestContextAlsProvider: Provider = {
  provide: REQUEST_CONTEXT_ALS,
  useValue: new AsyncLocalStorage<RequestContext>(),
};
