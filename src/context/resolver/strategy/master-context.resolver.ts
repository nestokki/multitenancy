import { Injectable } from '@nestjs/common';
import { DataSourceService } from 'src/infra/type-orm/service/data-source.service';
import { RequestContext } from '../../type/request-context.type';
import { ContextResolverService } from '../service/context-resolver.service';

@Injectable()
export class MasterContextResolver implements ContextResolverService {
  constructor(private readonly dataSourceService: DataSourceService) {}

  resolve(subdomain: string): RequestContext {
    const { manager: masterEntityManager } = this.dataSourceService.getMasterDataSource();

    return {
      scope: 'MASTER',
      subdomain,
      manager: masterEntityManager,
      handler: MasterContextResolver.name,
    };
  }
}
