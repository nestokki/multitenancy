import { Module } from '@nestjs/common';
import { RequestContextAlsProvider } from './provider/request-context-als.provider';
import { REQUEST_CONTEXT_ALS } from './token/request-context-als.token';

@Module({
  providers: [RequestContextAlsProvider],
  exports: [REQUEST_CONTEXT_ALS],
})
export class AlsModule {}
