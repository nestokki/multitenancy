import { Module } from '@nestjs/common';
import { ConfigExModule } from './config/config-ex.module';
import { ContextModule } from './core/middleware/context/context.module';
import { CoreModule } from './core/core.module';
import { InfraModule } from './infra/infra.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [ConfigExModule, InfraModule, ContextModule, CoreModule, ApiModule],
})
export class AppModule {}
