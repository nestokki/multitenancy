import { RequestContext } from '../../type/request-context.type';

export interface RequestContextResolver {
  resolve(subdomain: string): RequestContext;
}
