import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { MasterConfigService } from 'src/config/master/service/master-config.service';

@Injectable()
export class MasterTypeOrmModuleOptionsFactory implements TypeOrmOptionsFactory {
  constructor(private readonly masterConfigService: MasterConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const { getTypeOrmDataSourceOptions } = this.masterConfigService;

    return {
      ...getTypeOrmDataSourceOptions(),
      type: 'mysql',
      entities: ['dist/master/**/*.entity.js'],
      synchronize: true,
    };
  }
}
