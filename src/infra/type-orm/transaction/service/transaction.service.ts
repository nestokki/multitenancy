import { Injectable, OnModuleInit } from '@nestjs/common';
import { DiscoveryService, Reflector } from '@nestjs/core';
import { ContextManagerService } from 'src/context/manager/service/context-manager.service';
import { DatabaseService } from '../../database/service/database.service';

@Injectable()
export class TransactionService implements OnModuleInit {
  constructor(
    private readonly reflector: Reflector,
    private readonly discoveryService: DiscoveryService,
    private readonly contextManagerService: ContextManagerService,
    private readonly databaseService: DatabaseService,
  ) {}

  onModuleInit(): void {}
}
