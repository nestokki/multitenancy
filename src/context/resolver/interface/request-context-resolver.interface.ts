import { RequestContext } from '../../type/request-context.type';

export interface RequestContextResolver {
  canResolve(subDomain: string): boolean;
  resolve(subdomain: string): RequestContext;
}
