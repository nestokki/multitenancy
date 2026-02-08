import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TenantDatabaseConfig } from '../setup/tenant.configuration';

@Injectable()
export class TenantConfigService {
  constructor(
    @Inject(TenantDatabaseConfig.KEY)
    private readonly databaseEnv: ConfigType<typeof TenantDatabaseConfig>,
  ) {}

  getTypeOrmDataSourceOptions() {
    return {
      host: this.databaseEnv.MYSQL.HOST,
      port: this.databaseEnv.MYSQL.TCP_PORT,
      username: this.databaseEnv.MYSQL.USER,
      password: this.databaseEnv.MYSQL.PASSWORD,
    };
  }
}
