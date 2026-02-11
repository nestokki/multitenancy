import { Module } from '@nestjs/common';
import { TypeOrmExModule } from 'src/infra/type-orm/type-orm-ex.module';
import { ContextResolversProvider } from './provider/context-resolvers.provider';
import { CONTEXT_RESOLVERS } from './token/context-resolvers.token';

@Module({
  imports: [TypeOrmExModule],
  providers: [ContextResolversProvider],
  exports: [CONTEXT_RESOLVERS],
})
export class ContextResolverModule {}
