import { RequestContext } from '../../type/request-context.type';

export interface ContextResolverService {
  resolve(subdomain: string): RequestContext;
}
