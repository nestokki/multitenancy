import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterTypeOrmModuleOptionsFactory } from './master-type-orm-module-options.factory';
import { TenantDataSourceProvider } from './provider/tenant-data-source.provider';
import { DataSourceService } from './service/data-source.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ name: 'MASTER', useClass: MasterTypeOrmModuleOptionsFactory }),
  ],
  providers: [TenantDataSourceProvider, DataSourceService],
  exports: [DataSourceService],
})
export class TypeOrmDatabaseModule {}
