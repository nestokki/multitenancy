import { Injectable } from '@nestjs/common';
import { TenantService } from '../../domain/tenant.service';
import { CreateTenantCommand } from './action/create-tenant.command';

@Injectable()
export class CreateTenantUseCase {
  constructor(private readonly tenantService: TenantService) {}

  async execute(command: CreateTenantCommand): Promise<void> {
    return await this.tenantService.createTenant(command.toCreateProps());
  }
}
