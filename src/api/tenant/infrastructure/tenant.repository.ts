import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RepositoryService } from 'src/infra/type-orm/database/service/repository.service';
import { TenantCreateProps, TenantUpdateProps } from '../domain/tenant.type';
import { TenantDomain } from '../domain/tenant.domain';
import { TenantEntity } from './tenant.entity';
import { TenantMapper } from './tenant.mapper';

@Injectable()
export class TenantRepository {
  constructor(private readonly repositoryService: RepositoryService) {}

  private repository(): Repository<TenantEntity> {
    return this.repositoryService.get(TenantEntity);
  }

  async createTenant(props: TenantCreateProps): Promise<void> {
    await this.repository().save(TenantMapper.toEntity(props));
  }

  async updateTenant(idx: number, props: TenantUpdateProps): Promise<void> {
    await this.repository().update({ idx }, TenantMapper.toPartialEntity(props));
  }

  async deleteTenant(idx: number): Promise<void> {
    await this.repository().delete({ idx });
  }

  async findTenantByIdx(idx: number): Promise<TenantDomain | null> {
    const entity = await this.repository()
      .createQueryBuilder('tenant')
      .where('tenant.idx = :idx', { idx })
      .getOne();

    return entity && TenantMapper.toDomain(entity);
  }

  async findTenantList(): Promise<TenantDomain[]> {
    const entities = await this.repository()
      .createQueryBuilder('tenant')
      .orderBy('tenant.createdAt', 'DESC')
      .getMany();

    return entities.map(TenantMapper.toDomain);
  }
}
