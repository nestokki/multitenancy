import { RequestScope } from 'src/common/type/request-scope.type';
import { EntityManager } from 'typeorm';

export interface RequestContext {
  scope: RequestScope;
  subdomain: string;
  manager: EntityManager;
  handler: string;
}
