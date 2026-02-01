import { Injectable } from '@nestjs/common';
import { TenantService } from '../../domain/tenant.service';

@Injectable()
export class DeleteTenantUseCase {
  constructor(private readonly tenantService: TenantService) {}

  async execute(idx: number): Promise<void> {
    return await this.tenantService.deleteTenant(idx);
  }
}
