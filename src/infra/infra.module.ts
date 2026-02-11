import { Module } from '@nestjs/common';
import { TypeOrmExModule } from './type-orm/type-orm-ex.module';

@Module({
  imports: [TypeOrmExModule],
})
export class InfraModule {}
