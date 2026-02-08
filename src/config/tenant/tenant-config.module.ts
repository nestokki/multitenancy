import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validationTenantSchema } from './validation/tenant.validator';
import { tenantConfig } from './setup/tenant.configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.tenant'],
      load: tenantConfig,
      validationSchema: validationTenantSchema,
    }),
  ],
})
export class TenantConfigModule {}
