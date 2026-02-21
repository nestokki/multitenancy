import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateTenantCommand } from '../../../application/command/action/create-tenant.command';
import { TenantCreateProps } from '../../../domain/tenant.type';

export class CreateTenantRequestDto {
  @IsNotEmpty()
  @IsString()
  required: string;

  @IsOptional()
  @IsString()
  nullable?: string;

  toCreateProps(): TenantCreateProps {
    return {
      required: this.required,
      nullable: this.nullable ?? null,
    };
  }

  toCommand(): CreateTenantCommand {
    return CreateTenantCommand.create(this.toCreateProps());
  }
}
