import { Module } from '@nestjs/common';
import { MasterContextResolver } from './resolver/strategy/master-context.resolver';
import { TenantContextResolver } from './resolver/strategy/tenant-context.resolver';
import { CONTEXT_RESOLVERS } from './resolver/factory/token/context-resolvers.token';
import { ContextResolversProvider } from './resolver/factory/provider/context-resolvers.provider';

@Module({
  providers: [MasterContextResolver, TenantContextResolver, ContextResolversProvider],
  exports: [CONTEXT_RESOLVERS],
})
export class ContextModule {}
