import { UserListItemModel } from '../../../application/query/view/user-list-item.model';

export class FindUserListResponseDto {
  readonly userList: UserListItemDto[];

  private constructor(userList: UserListItemDto[]) {
    this.userList = userList;
  }

  static from(modelList: UserListItemModel[]): FindUserListResponseDto {
    const userList = modelList.map(UserListItemDto.from);
    return new FindUserListResponseDto(userList);
  }
}

class UserListItemDto {
  readonly idx: number;
  readonly required: string;
  readonly nullable: string | null;
  readonly updatedAt: Date;
  readonly createdAt: Date;

  private constructor(model: UserListItemModel) {
    this.idx = model.idx;
    this.required = model.required;
    this.nullable = model.nullable;
    this.updatedAt = model.updatedAt;
    this.createdAt = model.createdAt;
  }

  static from(model: UserListItemModel): UserListItemDto {
    return new UserListItemDto(model);
  }
}
