import { TenantCreateProps } from '../../../domain/tenant.type';

export class CreateTenantCommand {
  private constructor(private readonly props: TenantCreateProps) {}

  static create(props: TenantCreateProps): CreateTenantCommand {
    return new CreateTenantCommand(props);
  }

  toCreateProps(): TenantCreateProps {
    return {
      required: this.props.required,
      nullable: this.props.nullable,
    };
  }
}
