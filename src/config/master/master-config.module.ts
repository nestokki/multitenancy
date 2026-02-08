import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validationMasterSchema } from './validation/master.validator';
import { masterConfig } from './setup/master.configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.master'],
      load: masterConfig,
      validationSchema: validationMasterSchema,
    }),
  ],
})
export class MasterConfigModule {}
