import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { FindTenantUseCase } from '../../application/query/find-tenant.use-case';
import { FindTenantListUseCase } from '../../application/query/find-tenant-list.use-case';
import { FindTenantResponseDto } from './dto/find-tenant.dto';
import { FindTenantListResponseDto } from './dto/find-tenant-list.dto';

@Controller('tenants')
export class TenantQueryController {
  constructor(
    private readonly findTenantUseCase: FindTenantUseCase,
    private readonly findTenantListUseCase: FindTenantListUseCase,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Get('/:tenantId')
  async findTenant(@Param('tenantId', ParseIntPipe) idx: number): Promise<FindTenantResponseDto> {
    const tenantModel = await this.findTenantUseCase.execute(idx);
    return FindTenantResponseDto.from(tenantModel);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/')
  async findTenantList(): Promise<FindTenantListResponseDto> {
    const tenantModelList = await this.findTenantListUseCase.execute();
    return FindTenantListResponseDto.from(tenantModelList);
  }
}
