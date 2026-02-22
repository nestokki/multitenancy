import { RequestScope } from 'src/common/type/request-scope.type';
import { EntityManager } from 'typeorm';

export interface RequestContext {
  scope: RequestScope;
  handler: string;
  subdomain: string;
  masterManager: EntityManager;
  tenantManager?: EntityManager;
}
