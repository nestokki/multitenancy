import { Injectable } from '@nestjs/common';
import { DataSourceService } from 'src/infra/type-orm/service/data-source.service';
import { RequestContext } from '../../type/request-context.type';
import { RequestContextResolver } from '../interface/request-context-resolver.interface';

@Injectable()
export class MasterContextResolver implements RequestContextResolver {
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
