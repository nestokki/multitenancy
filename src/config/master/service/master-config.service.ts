import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { masterDatabaseConfig } from '../setup/master.configuration';

@Injectable()
export class MasterConfigService {
  constructor(
    @Inject(masterDatabaseConfig.KEY)
    private readonly databaseEnv: ConfigType<typeof masterDatabaseConfig>,
  ) {}

  getTypeOrmDataSourceOptions() {
    return {
      host: this.databaseEnv.MYSQL.HOST,
      port: this.databaseEnv.MYSQL.TCP_PORT,
      username: this.databaseEnv.MYSQL.USER,
      password: this.databaseEnv.MYSQL.PASSWORD,
      database: this.databaseEnv.MYSQL.DATABASE,
    };
  }
}
