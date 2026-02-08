import { UserCreateProps, UserDomainProps, UserUpdateProps } from '../domain/user.type';
import { UserDomain } from '../domain/user.domain';
import { UserEntity } from './user.entity';

export class UserMapper {
  static toDomain(entity: UserEntity): UserDomain {
    const userDomainProps: UserDomainProps = {
      idx: entity.idx,
      required: entity.required,
      nullable: entity.nullable,
      updatedAt: entity.updatedAt,
      createdAt: entity.createdAt,
    };

    return UserDomain.fromEntity(userDomainProps);
  }

  static toEntity(props: UserCreateProps): UserEntity {
    const entity = new UserEntity();

    entity.required = props.required;
    entity.nullable = props.nullable;

    return entity;
  }

  static toPartialEntity(props: UserUpdateProps): Partial<UserEntity> {
    const entity = new UserEntity();

    if (props.required !== undefined) entity.required = props.required;
    if (props.nullable !== undefined) entity.nullable = props.nullable;

    return entity;
  }
}
