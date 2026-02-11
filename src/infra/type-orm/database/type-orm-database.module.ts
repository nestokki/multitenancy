import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceModule } from 'src/factory/data-source/data-source.module';
import { MasterTypeOrmModuleOptionsFactory } from './factory/master-type-orm-module-options.factory';
import { DatabaseService } from './service/database.service';
import { RepositoryService } from './service/repository.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({ name: 'MASTER', useClass: MasterTypeOrmModuleOptionsFactory }),
    DataSourceModule,
  ],
  providers: [DatabaseService, RepositoryService],
  exports: [DatabaseService, RepositoryService],
})
export class TypeOrmDatabaseModule {}
