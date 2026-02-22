import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { RequestContextMiddleware } from './middleware/request-context.middleware';
import { ContextModule } from 'src/core/middleware/context/context.module';

@Module({
  imports: [ContextModule],
  providers: [RequestContextMiddleware],
})
export class CoreModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestContextMiddleware).forRoutes('*');
  }
}
