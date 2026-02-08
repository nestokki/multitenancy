interface UserPk {
  idx: number;
}

interface UserRequiredProps {
  required: string;
}

interface UserNullableProps {
  nullable: string | null;
}

interface UserDefaultProps {
  updatedAt: Date;
  createdAt: Date;
}

export type UserDomainProps = UserPk &
  UserRequiredProps &
  UserNullableProps &
  UserDefaultProps;

export type UserCreateProps = UserRequiredProps & UserNullableProps;

export type UserUpdateProps = Partial<UserRequiredProps & UserNullableProps>;
