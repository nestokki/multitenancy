import { Injectable } from '@nestjs/common';
import { TenantService } from '../../domain/tenant.service';
import { UpdateTenantCommand } from './action/update-tenant.command';

@Injectable()
export class UpdateTenantUseCase {
  constructor(private readonly tenantService: TenantService) {}

  async execute(command: UpdateTenantCommand): Promise<void> {
    return await this.tenantService.updateTenant(command.idx, command.toUpdateProps());
  }
}
