import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { TenantCreateProps, TenantUpdateProps } from '../domain/tenant.type';
import { TenantDomain } from '../domain/tenant.domain';
import { TenantEntity } from './tenant.entity';
import { TenantMapper } from './tenant.mapper';

@Injectable()
export class TenantRepository {
  constructor(@InjectRepository(TenantEntity) private readonly typeOrm: Repository<TenantEntity>) {}

  private repository(manager?: EntityManager): Repository<TenantEntity> {
    return manager ? manager.getRepository(TenantEntity) : this.typeOrm;
  }

  async createTenant(props: TenantCreateProps, manager?: EntityManager): Promise<void> {
    await this.repository(manager).save(TenantMapper.toEntity(props));
  }

  async updateTenant(idx: number, props: TenantUpdateProps, manager?: EntityManager): Promise<void> {
    await this.repository(manager).update({ idx }, TenantMapper.toPartialEntity(props));
  }

  async deleteTenant(idx: number, manager?: EntityManager): Promise<void> {
    await this.repository(manager).delete({ idx });
  }

  async findTenantByIdx(idx: number, manager?: EntityManager): Promise<TenantDomain | null> {
    const entity = await this.repository(manager)
      .createQueryBuilder('tenant')
      .where('tenant.idx = :idx', { idx })
      .getOne();

    return entity && TenantMapper.toDomain(entity);
  }

  async findTenantList(manager?: EntityManager): Promise<TenantDomain[]> {
    const entities = await this.repository(manager)
      .createQueryBuilder('tenant')
      .orderBy('tenant.createdAt', 'DESC')
      .getMany();

    return entities.map(TenantMapper.toDomain);
  }
}
