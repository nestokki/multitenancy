import { Provider } from '@nestjs/common';
import { CONTEXT_RESOLVERS } from 'src/context/resolver/token/context-resolvers.token';
import { MasterContextResolver } from '../strategy/master-context.resolver';
import { TenantContextResolver } from '../strategy/tenant-context.resolver';

export const ContextResolversProvider: Provider = {
  provide: CONTEXT_RESOLVERS,
  inject: [MasterContextResolver, TenantContextResolver],
  useFactory: (master: MasterContextResolver, tenant: TenantContextResolver) => [master, tenant],
};
