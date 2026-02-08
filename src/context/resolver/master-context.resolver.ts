import { Injectable } from '@nestjs/common';
import { DataSourceService } from 'src/infra/type-orm/database/service/data-source.service';
import { RequestContext } from '../type/request-context.type';
import { ContextResolver } from './context.resolver';

@Injectable()
export class MasterContextResolver implements ContextResolver {
  constructor(private readonly dataSourceService: DataSourceService) {}

  resolve(subdomain: string): RequestContext {
    const { manager: masterEntityManager } = this.dataSourceService.getMasterDataSource();

    return {
      scope: 'MASTER',
      subdomain: subdomain,
      manager: masterEntityManager,
      handler: MasterContextResolver.name,
    };
  }
}
