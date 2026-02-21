import { TenantDomainProps } from './tenant.type';

export class TenantDomain {
  private constructor(private readonly props: TenantDomainProps) {}

  static fromEntity(props: TenantDomainProps): TenantDomain {
    return new TenantDomain(props);
  }

  get idx(): number {
    return this.props.idx;
  }
  get required(): string {
    return this.props.required;
  }
  get nullable(): string | null {
    return this.props.nullable ?? null;
  }
  get updatedAt(): Date {
    return this.props.updatedAt;
  }
  get createdAt(): Date {
    return this.props.createdAt;
  }
}
