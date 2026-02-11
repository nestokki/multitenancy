import { Global, Module } from '@nestjs/common';
import { AlsModule } from 'src/factory/als/als.module';
import { ContextManagerService } from './service/context-manager.service';

@Global()
@Module({
  imports: [AlsModule],
  providers: [ContextManagerService],
  exports: [ContextManagerService],
})
export class ContextManagerModule {}
