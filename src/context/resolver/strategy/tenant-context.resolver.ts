import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { DatabaseService } from 'src/infra/type-orm/database/service/database.service';
import { RequestContext } from '../../type/request-context.type';
import { RequestContextResolver } from '../interface/request-context-resolver.interface';

@Injectable()
export class TenantContextResolver implements RequestContextResolver {
  constructor(private readonly databaseService: DatabaseService) {}

  resolve(subdomain: string): RequestContext {
    const tenantDataSource = this.databaseService.getTenantDataSource(subdomain);

    if (!tenantDataSource)
      throw new InternalServerErrorException('Tenant DB initialization failed');

    const { manager: tenantEntityManager } = tenantDataSource;

    return {
      scope: 'TENANT',
      subdomain: subdomain,
      manager: tenantEntityManager,
      handler: TenantContextResolver.name,
    };
  }
}
