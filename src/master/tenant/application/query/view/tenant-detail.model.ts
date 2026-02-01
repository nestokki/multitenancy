import { TenantDomain } from '../../../domain/tenant.domain';

interface TenantDetailProps {
  required: string;
  nullable: string | null;
  createdAt: Date;
}

export class TenantDetailModel {
  private constructor(private readonly props: TenantDetailProps) {}

  static fromTenant(tenant: TenantDomain): TenantDetailModel {
    return new TenantDetailModel({
      required: tenant.required,
      nullable: tenant.nullable,
      createdAt: tenant.createdAt,
    });
  }

  get required(): string {
    return this.props.required;
  }
  get nullable(): string | null {
    return this.props.nullable;
  }
  get createdAt(): Date {
    return this.props.createdAt;
  }
}
