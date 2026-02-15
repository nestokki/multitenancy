import { Module } from '@nestjs/common';
import { ContextResolversProvider } from './provider/context-resolvers.provider';
import { MasterContextResolver } from './strategy/master-context.resolver';
import { TenantContextResolver } from './strategy/tenant-context.resolver';
import { CONTEXT_RESOLVERS } from './token/context-resolvers.token';

@Module({
  providers: [MasterContextResolver, TenantContextResolver, ContextResolversProvider],
  exports: [CONTEXT_RESOLVERS],
})
export class ContextResolverModule {}
