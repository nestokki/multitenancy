import { Module } from '@nestjs/common';
import { ConfigExModule } from './config/config-ex.module';
import { ContextModule } from './context/context.module';
import { CoreModule } from './core/core.module';
import { InfraModule } from './infra/infra.module';
import { MasterModule } from './master/master.module';
import { TenantModule } from './tenant/tenant.module';

@Module({
  imports: [ConfigExModule, InfraModule, ContextModule, CoreModule, MasterModule, TenantModule],
})
export class AppModule {}
