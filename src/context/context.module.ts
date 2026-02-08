import { Module } from '@nestjs/common';
import { RequestContextStoreProvider } from './provider/request-context-store.provider';
import { MasterContextResolver } from './resolver/master-context.resolver';
import { TenantContextResolver } from './resolver/tenant-context.resolver';
import { ContextService } from './service/context.service';

@Module({
  providers: [
    RequestContextStoreProvider,
    ContextService,
    MasterContextResolver,
    TenantContextResolver,
  ],
  exports: [ContextService],
})
export class ContextModule {}
