import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/infra/type-orm/database/service/database.service';
import { RequestContext } from '../../type/request-context.type';
import { RequestContextResolver } from '../interface/request-context-resolver.interface';

@Injectable()
export class MasterContextResolver implements RequestContextResolver {
  constructor(private readonly databaseService: DatabaseService) {}

  resolve(subdomain: string): RequestContext {
    const { manager: masterEntityManager } = this.databaseService.getMasterDataSource();

    return {
      scope: 'MASTER',
      subdomain,
      manager: masterEntityManager,
      handler: MasterContextResolver.name,
    };
  }
}
