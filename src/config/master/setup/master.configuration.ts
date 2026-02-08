import { registerAs } from '@nestjs/config';

export const masterDatabaseConfig = registerAs(Symbol('MASTER_DATABASE_CONFIG_TOKEN'), () => ({
  MYSQL: {
    HOST: process.env.MYSQL_HOST!,
    USER: process.env.MYSQL_USER!,
    PASSWORD: process.env.MYSQL_PASSWORD!,
    DATABASE: process.env.MYSQL_DATABASE!,
    TCP_PORT: Number(process.env.MYSQL_TCP_PORT),
  },
}));

export const masterConfig = [masterDatabaseConfig];
