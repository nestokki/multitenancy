import { Injectable, NotFoundException } from '@nestjs/common';
import { TenantRepository } from '../infrastructure/tenant.repository';
import { TenantDomain } from './tenant.domain';
import { TenantCreateProps, TenantUpdateProps } from './tenant.type';

@Injectable()
export class TenantService {
  constructor(private readonly tenantRepository: TenantRepository) {}

  async createTenant(props: TenantCreateProps): Promise<void> {
    await this.tenantRepository.createTenant(props);
  }

  async updateTenant(idx: number, props: TenantUpdateProps): Promise<void> {
    await this.tenantRepository.updateTenant(idx, props);
  }

  async deleteTenant(idx: number): Promise<void> {
    await this.tenantRepository.deleteTenant(idx);
  }

  async findTenantByIdx(idx: number): Promise<TenantDomain> {
    const tenant = await this.tenantRepository.findTenantByIdx(idx);
    if (!tenant) throw new NotFoundException('tenant not found');
    return tenant;
  }

  async findTenantList(): Promise<TenantDomain[]> {
    return await this.tenantRepository.findTenantList();
  }
}
