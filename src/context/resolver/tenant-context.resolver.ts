import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { DataSourceService } from 'src/infra/type-orm/database/service/data-source.service';
import { RequestContext } from '../type/request-context.type';
import { ContextResolver } from './context.resolver';

@Injectable()
export class TenantContextResolver implements ContextResolver {
  constructor(private readonly dataSourceService: DataSourceService) {}

  resolve(subdomain: string): RequestContext {
    const tenantDataSource = this.dataSourceService.getTenantDataSource(subdomain);

    if (!tenantDataSource) throw new InternalServerErrorException('Tenant connection not found');

    const { manager: tenantEntityManager } = tenantDataSource;

    return {
      scope: 'TENANT',
      name: subdomain,
      manager: tenantEntityManager,
      handler: TenantContextResolver.name,
    };
  }
}
