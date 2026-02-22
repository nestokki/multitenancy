import { Global, Module } from '@nestjs/common';
import { RequestContextAlsProvider } from './request/factory/provider/request-context-als.provider';
import { RequestContextService } from './request/service/request-context.service';

@Global()
@Module({
  providers: [RequestContextAlsProvider, RequestContextService],
  exports: [RequestContextService],
})
export class AlsModule {}
