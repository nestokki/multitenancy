import { Module } from '@nestjs/common';
import { DiscoveryModule } from '@nestjs/core';
import { TransactionService } from './service/transaction.service';

@Module({
  imports: [DiscoveryModule],
  providers: [TransactionService],
})
export class TypeOrmTransactionModule {}
