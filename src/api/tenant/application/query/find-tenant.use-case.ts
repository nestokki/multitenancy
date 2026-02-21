import { Injectable } from '@nestjs/common';
import { TenantService } from '../../domain/tenant.service';
import { TenantDetailModel } from './view/tenant-detail.model';

@Injectable()
export class FindTenantUseCase {
  constructor(private readonly tenantService: TenantService) {}

  async execute(idx: number): Promise<TenantDetailModel> {
    const tenant = await this.tenantService.findTenantByIdx(idx);
    return TenantDetailModel.fromTenant(tenant);
  }
}
