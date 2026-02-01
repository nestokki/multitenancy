import { TenantCreateProps, TenantDomainProps, TenantUpdateProps } from '../domain/tenant.type';
import { TenantDomain } from '../domain/tenant.domain';
import { TenantEntity } from './tenant.entity';

export class TenantMapper {
  static toDomain(entity: TenantEntity): TenantDomain {
    const tenantDomainProps: TenantDomainProps = {
      idx: entity.idx,
      required: entity.required,
      nullable: entity.nullable,
      updatedAt: entity.updatedAt,
      createdAt: entity.createdAt,
    };

    return TenantDomain.fromEntity(tenantDomainProps);
  }

  static toEntity(props: TenantCreateProps): TenantEntity {
    const entity = new TenantEntity();

    entity.required = props.required;
    entity.nullable = props.nullable;

    return entity;
  }

  static toPartialEntity(props: TenantUpdateProps): Partial<TenantEntity> {
    const entity = new TenantEntity();

    if (props.required !== undefined) entity.required = props.required;
    if (props.nullable !== undefined) entity.nullable = props.nullable;

    return entity;
  }
}
