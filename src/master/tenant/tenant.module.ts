import { Module } from '@nestjs/common';
import { TenantService } from './domain/tenant.service';
import { TenantEntity } from './infrastructure/tenant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantRepository } from './infrastructure/tenant.repository';
import { CreateTenantUseCase } from './application/command/create-tenant.use-case';
import { UpdateTenantUseCase } from './application/command/update-tenant.use-case';
import { DeleteTenantUseCase } from './application/command/delete-tenant.use-case';
import { FindTenantUseCase } from './application/query/find-tenant.use-case';
import { FindTenantListUseCase } from './application/query/find-tenant-list.use-case';
import { TenantCommandController } from './presentation/command/tenant-command.controller';
import { TenantQueryController } from './presentation/query/tenant-query.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TenantEntity])],
  controllers: [TenantCommandController, TenantQueryController],
  providers: [TenantService, TenantRepository, CreateTenantUseCase, UpdateTenantUseCase, DeleteTenantUseCase, FindTenantUseCase, FindTenantListUseCase],
  exports: [TenantService],
})
export class TenantModule {}
