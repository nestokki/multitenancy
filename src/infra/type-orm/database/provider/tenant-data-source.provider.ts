import { Provider } from '@nestjs/common';
import { DataSourceOptions } from 'typeorm';
import { TenantConfigService } from 'src/config/tenant/service/tenant-config.service';

const tenantDataSourceFactory = async (
  tenantConfigService: TenantConfigService,
): Promise<DataSourceOptions> => {
  const { getTypeOrmDataSourceOptions } = tenantConfigService;

  const tenantDataSourceOptions: DataSourceOptions = {
    ...getTypeOrmDataSourceOptions(),
    type: 'mysql',
    entities: [`dist/tenant/**/*.entity.js`],
    synchronize: true,
  };

  return tenantDataSourceOptions;
};

const TENANT_DATASOURCE_OPTIONS = Symbol('TENANT_DATASOURCE_OPTIONS');

export const TenantDataSourceProvider: Provider = {
  provide: TENANT_DATASOURCE_OPTIONS,
  inject: [TenantConfigService],
  useFactory: async (tenantConfigService: TenantConfigService): Promise<DataSourceOptions> => {
    return tenantDataSourceFactory(tenantConfigService);
  },
};
