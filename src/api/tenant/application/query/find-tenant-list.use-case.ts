import { Injectable } from '@nestjs/common';
import { TenantService } from '../../domain/tenant.service';
import { TenantListItemModel } from './view/tenant-list-item.model';

@Injectable()
export class FindTenantListUseCase {
  constructor(private readonly tenantService: TenantService) {}

  async execute(): Promise<TenantListItemModel[]> {
    const tenantList = await this.tenantService.findTenantList();
    return tenantList.map(TenantListItemModel.fromTenant);
  }
}
