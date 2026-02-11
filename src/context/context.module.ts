import { Module } from '@nestjs/common';
import { ContextManagerService } from './manager/service/context-manager.service';
import { ContextResolverModule } from './resolver/context-resolver.module';

@Module({
  imports: [ContextResolverModule, ContextManagerService],
  exports: [ContextResolverModule, ContextManagerService],
})
export class ContextModule {}
