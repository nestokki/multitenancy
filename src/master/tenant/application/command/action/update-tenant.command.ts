import { BadRequestException } from '@nestjs/common';
import { TenantUpdateProps } from '../../../domain/tenant.type';

export class UpdateTenantCommand {
  private constructor(
    readonly idx: number,
    private readonly props: TenantUpdateProps,
  ) {}

  static create(idx: number, props: TenantUpdateProps): UpdateTenantCommand {
    if (Object.keys(props).length === 0) {
      throw new BadRequestException('No update fields provided');
    }

    return new UpdateTenantCommand(idx, props);
  }

  toUpdateProps(): TenantUpdateProps {
    return {
      required: this.props.required,
      nullable: this.props.nullable,
    };
  }
}
