interface TenantPk {
  idx: number;
}

interface TenantRequiredProps {
  required: string;
}

interface TenantNullableProps {
  nullable: string | null;
}

interface TenantDefaultProps {
  updatedAt: Date;
  createdAt: Date;
}

export type TenantDomainProps = TenantPk &
  TenantRequiredProps &
  TenantNullableProps &
  TenantDefaultProps;

export type TenantCreateProps = TenantRequiredProps & TenantNullableProps;

export type TenantUpdateProps = Partial<TenantRequiredProps & TenantNullableProps>;
