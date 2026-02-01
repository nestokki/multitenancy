import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTenantUseCase } from '../../application/command/create-tenant.use-case';
import { UpdateTenantUseCase } from '../../application/command/update-tenant.use-case';
import { DeleteTenantUseCase } from '../../application/command/delete-tenant.use-case';
import { CreateTenantRequestDto } from './dto/create-tenant.dto';
import { UpdateTenantRequestDto } from './dto/update-tenant.dto';

@Controller('tenants')
export class TenantCommandController {
  constructor(
    private readonly createTenantUseCase: CreateTenantUseCase,
    private readonly updateTenantUseCase: UpdateTenantUseCase,
    private readonly deleteTenantUseCase: DeleteTenantUseCase,
  ) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('/')
  async createTenant(@Body() dto: CreateTenantRequestDto): Promise<void> {
    await this.createTenantUseCase.execute(dto.toCommand());
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch('/:tenantId')
  async updateTenant(
    @Param('tenantId', ParseIntPipe) idx: number,
    @Body() dto: UpdateTenantRequestDto,
  ): Promise<void> {
    await this.updateTenantUseCase.execute(dto.toCommand(idx));
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:tenantId')
  async deleteTenant(@Param('tenantId', ParseIntPipe) idx: number): Promise<void> {
    return await this.deleteTenantUseCase.execute(idx);
  }
}
