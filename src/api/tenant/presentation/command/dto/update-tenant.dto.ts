import { IsOptional, IsString } from 'class-validator';
import { UpdateTenantCommand } from '../../../application/command/action/update-tenant.command';
import { TenantUpdateProps } from '../../../domain/tenant.type';

export class UpdateTenantRequestDto {
  @IsOptional()
  @IsString()
  required?: string;

  @IsOptional()
  @IsString()
  nullable?: string;

  toUpdateProps(): TenantUpdateProps {
    return {
      ...(this.required != undefined && { required: this.required }),
      ...(this.nullable !== undefined && { nullable: this.nullable }),
    };
  }

  toCommand(idx: number): UpdateTenantCommand {
    return UpdateTenantCommand.create(idx, this.toUpdateProps());
  }
}
