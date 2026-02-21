import { TenantDetailModel } from '../../../application/query/view/tenant-detail.model';

export class FindTenantResponseDto {
  readonly required: string;
  readonly nullable: string | null;
  readonly createdAt: Date;

  private constructor(
    private readonly model: {
      required: string;
      nullable: string | null;
      createdAt: Date;
    },
  ) {
    this.required = model.required;
    this.nullable = model.nullable;
    this.createdAt = model.createdAt;
  }

  static from(model: TenantDetailModel): FindTenantResponseDto {
    return new FindTenantResponseDto({
      required: model.required,
      nullable: model.nullable,
      createdAt: model.createdAt,
    });
  }
}
