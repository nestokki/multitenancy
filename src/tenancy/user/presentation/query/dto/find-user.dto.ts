import { UserDetailModel } from '../../../application/query/view/user-detail.model';

export class FindUserResponseDto {
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

  static from(model: UserDetailModel): FindUserResponseDto {
    return new FindUserResponseDto({
      required: model.required,
      nullable: model.nullable,
      createdAt: model.createdAt,
    });
  }
}
