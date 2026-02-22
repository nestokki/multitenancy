import { Module } from '@nestjs/common';
import { ContextResolversProvider } from './resolver/provider/context-resolvers.provider';
import { MasterContextResolver } from './resolver/strategy/master-context.resolver';
import { TenantContextResolver } from './resolver/strategy/tenant-context.resolver';
import { CONTEXT_RESOLVERS } from './resolver/token/context-resolvers.token';

@Module({
  providers: [MasterContextResolver, TenantContextResolver, ContextResolversProvider],
  exports: [CONTEXT_RESOLVERS],
})
export class ContextModule {}
