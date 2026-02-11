import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceModule } from 'src/factory/data-source/data-source.module';
import { MasterTypeOrmModuleOptionsFactory } from './factory/master-type-orm-module-options.factory';
import { DataSourceService } from './service/data-source.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ name: 'MASTER', useClass: MasterTypeOrmModuleOptionsFactory }),
    DataSourceModule,
  ],
  providers: [DataSourceService],
  exports: [DataSourceService],
})
export class TypeOrmExModule {}
