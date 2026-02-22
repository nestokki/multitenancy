import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { DatabaseService } from 'src/infra/type-orm/database/service/database.service';
import { RequestContext } from '../../type/request-context.type';
import { RequestContextResolver } from '../../../interface/request-context-resolver.interface';

@Injectable()
export class TenantContextResolver implements RequestContextResolver {
  constructor(private readonly databaseService: DatabaseService) {}

  canResolve(subDomain: string): boolean {
    return !subDomain.includes('master');
  }

  resolve(subdomain: string): RequestContext {
    const { manager: masterEntityManager } = this.databaseService.getMasterDataSource();
    const tenantDataSource = this.databaseService.getTenantDataSource(subdomain);

    if (!tenantDataSource)
      throw new InternalServerErrorException('Tenant DB initialization failed');

    const { manager: tenantEntityManager } = tenantDataSource;

    return {
      scope: 'TENANT',
      handler: TenantContextResolver.name,
      subdomain,
      masterManager: masterEntityManager,
      tenantManager: tenantEntityManager,
    };
  }
}
