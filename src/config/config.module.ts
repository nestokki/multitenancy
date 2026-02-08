import { Module } from '@nestjs/common';
import { MasterConfigModule } from './master/master-config.module';
import { TenantConfigModule } from './tenant/tenant-config.module';

@Module({
  imports: [MasterConfigModule, TenantConfigModule],
})
export class ConfigModule {}
