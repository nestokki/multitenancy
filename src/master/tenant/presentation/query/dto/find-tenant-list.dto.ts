import { TenantListItemModel } from '../../../application/query/view/tenant-list-item.model';

export class FindTenantListResponseDto {
  readonly tenantList: TenantListItemDto[];

  private constructor(tenantList: TenantListItemDto[]) {
    this.tenantList = tenantList;
  }

  static from(modelList: TenantListItemModel[]): FindTenantListResponseDto {
    const tenantList = modelList.map(TenantListItemDto.from);
    return new FindTenantListResponseDto(tenantList);
  }
}

class TenantListItemDto {
  readonly idx: number;
  readonly required: string;
  readonly nullable: string | null;
  readonly updatedAt: Date;
  readonly createdAt: Date;

  private constructor(model: TenantListItemModel) {
    this.idx = model.idx;
    this.required = model.required;
    this.nullable = model.nullable;
    this.updatedAt = model.updatedAt;
    this.createdAt = model.createdAt;
  }

  static from(model: TenantListItemModel): TenantListItemDto {
    return new TenantListItemDto(model);
  }
}
