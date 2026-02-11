import { Injectable } from '@nestjs/common';
import { EntityTarget, ObjectLiteral, Repository } from 'typeorm';
import { ContextManagerService } from 'src/context/manager/service/context-manager.service';

@Injectable()
export class RepositoryResolver {
  constructor(private readonly contextManagerService: ContextManagerService) {}

  private getContext() {
    const scopedContext = this.contextManagerService.get();

    if (!scopedContext) throw new Error('Scoped context not found');

    return scopedContext;
  }

  get<T extends ObjectLiteral>(entity: EntityTarget<T>): Repository<T> {
    const { scope, subdomain, manager } = this.getContext();

    console.log(`Request: Scope(${scope}) SubDomain(${subdomain})`);

    if (!manager) throw new Error('Entity manager not found');

    if (manager === manager.queryRunner?.manager) {
      console.log('TRANSACTION');
    } else {
      console.log('NONE TRANSACTION');
    }

    return manager.getRepository(entity);
  }
}
