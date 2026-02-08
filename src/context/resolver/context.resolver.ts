import { RequestContext } from '../type/request-context.type';

export interface ContextResolver {
  resolve(subdomain: string): RequestContext;
}
