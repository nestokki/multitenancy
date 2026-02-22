import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterTypeOrmModuleOptionsFactory } from './factory/master-type-orm-module-options.factory';
import { DatabaseService } from './service/database.service';
import { RepositoryService } from './service/repository.service';
import { TenantDataSourceProvider } from './factory/provider/tenant-data-source.provider';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      name: 'MASTER',
      useClass: MasterTypeOrmModuleOptionsFactory,
    }),
  ],
  providers: [TenantDataSourceProvider, DatabaseService, RepositoryService],
  exports: [DatabaseService, RepositoryService],
})
export class TypeOrmDatabaseModule {}
