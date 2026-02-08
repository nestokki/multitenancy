import { registerAs } from '@nestjs/config';

export const TenantDatabaseConfig = registerAs(Symbol('TENANT_DATABASE_CONFIG_TOKEN'), () => ({
  MYSQL: {
    HOST: process.env.MYSQL_HOST!,
    USER: process.env.MYSQL_USER!,
    PASSWORD: process.env.MYSQL_PASSWORD!,
    TCP_PORT: Number(process.env.MYSQL_TCP_PORT),
  },
}));

export const tenantConfig = [TenantDatabaseConfig];
