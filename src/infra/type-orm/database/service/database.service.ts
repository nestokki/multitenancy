import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { Nullable } from 'src/common/type/native.type';
import { TENANT_DATASOURCE } from 'src/infra/type-orm/database/factory/token/tenant-data-source.token';
import { TenantEntity } from 'src/api/tenant/infrastructure/tenant.entity';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private readonly tenantDataSourceMap = new Map<string, DataSource>();

  constructor(
    @InjectDataSource('MASTER') private readonly masterDataSource: DataSource,
    @Inject(TENANT_DATASOURCE) private readonly tenantDataSourceOptions: DataSourceOptions,
  ) {}

  async onModuleInit(): Promise<void> {
    await this.connectTenantDatabase();
  }

  getMasterDataSource(): DataSource {
    return this.masterDataSource;
  }

  getTenantDataSource(subDomain: string): Nullable<DataSource> {
    return this.tenantDataSourceMap.get(subDomain) ?? null;
  }

  private async connectTenantDatabase(): Promise<void> {
    const tenantList = await this.masterDataSource
      .getRepository(TenantEntity)
      .find({ select: { name: true } });

    for (const { name } of tenantList) {
      if (!name) continue;

      const tenantDataSource = await this.createTenantDataSource(name);

      await tenantDataSource.initialize();

      if (tenantDataSource.isInitialized) {
        this.tenantDataSourceMap.set(name, tenantDataSource);
      }
    }
  }

  private async createTenantDataSource(tenant: string): Promise<DataSource> {
    const defaultDataSource = this.tenantDataSourceOptions;

    const tenantDataSourceOptions: DataSourceOptions = {
      ...defaultDataSource,
      database: `${tenant}_db`,
    } as MysqlConnectionOptions;

    return new DataSource(tenantDataSourceOptions);
  }
}
