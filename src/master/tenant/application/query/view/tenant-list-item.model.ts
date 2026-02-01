import { TenantDomain } from '../../../domain/tenant.domain';

interface TenantListItemProps {
  idx: number;
  required: string;
  nullable: string | null;
  updatedAt: Date;
  createdAt: Date;
}

export class TenantListItemModel {
  private constructor(private readonly props: TenantListItemProps) {}

  static fromTenant(tenant: TenantDomain): TenantListItemModel {
    return new TenantListItemModel({
      idx: tenant.idx,
      required: tenant.required,
      nullable: tenant.nullable,
      updatedAt: tenant.updatedAt,
      createdAt: tenant.createdAt,
    });
  }

  get idx(): number {
    return this.props.idx;
  }
  get required(): string {
    return this.props.required;
  }
  get nullable(): string | null {
    return this.props.nullable;
  }
  get updatedAt(): Date {
    return this.props.updatedAt;
  }
  get createdAt(): Date {
    return this.props.createdAt;
  }
}
