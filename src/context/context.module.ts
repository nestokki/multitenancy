import { Module } from '@nestjs/common';
import { ContextManagerModule } from './manager/context-manager.module';
import { ContextResolverModule } from './resolver/context-resolver.module';

@Module({
  imports: [ContextResolverModule, ContextManagerModule],
  exports: [ContextResolverModule],
})
export class ContextModule {}
