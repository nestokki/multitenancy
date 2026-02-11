import { Module } from '@nestjs/common';
import { TenantDataSourceProvider } from './provider/tenant-data-source.provider';
import { TENANT_DATASOURCE } from './token/tenant-data-source.token';

@Module({
  providers: [TenantDataSourceProvider],
  exports: [TENANT_DATASOURCE],
})
export class DataSourceModule {}
