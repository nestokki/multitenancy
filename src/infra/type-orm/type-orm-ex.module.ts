import { Module } from '@nestjs/common';
import { TypeOrmDatabaseModule } from './database/type-orm-database.module';
import { TypeOrmTransactionModule } from './transaction/type-orm-transaction.module';

@Module({
  imports: [TypeOrmDatabaseModule, TypeOrmTransactionModule],
})
export class TypeOrmExModule {}
