import { Provider } from '@nestjs/common';
import { DataSourceOptions } from 'typeorm';
import { TenantConfigService } from 'src/config/tenant/service/tenant-config.service';
import { TENANT_DATASOURCE } from '../token/tenant-data-source.token';

export const TenantDataSourceProvider: Provider = {
  provide: TENANT_DATASOURCE,
  inject: [TenantConfigService],
  useFactory: (tenantConfigService: TenantConfigService): Partial<DataSourceOptions> => {
    const tenantDataSourceOptions: DataSourceOptions = {
      ...tenantConfigService.getTypeOrmDataSourceOptions(),
      type: 'mysql',
      entities: [`dist/tenant/**/*.entity.js`],
      synchronize: true,
    };

    return tenantDataSourceOptions;
  },
};
