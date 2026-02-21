import { Module } from '@nestjs/common';
import { UserService } from './domain/user.service';
import { UserRepository } from './infrastructure/user.repository';
import { CreateUserUseCase } from './application/command/create-user.use-case';
import { UpdateUserUseCase } from './application/command/update-user.use-case';
import { DeleteUserUseCase } from './application/command/delete-user.use-case';
import { FindUserUseCase } from './application/query/find-user.use-case';
import { FindUserListUseCase } from './application/query/find-user-list.use-case';
import { UserCommandController } from './presentation/command/user-command.controller';
import { UserQueryController } from './presentation/query/user-query.controller';

@Module({
  controllers: [UserCommandController, UserQueryController],
  providers: [
    UserService,
    UserRepository,
    CreateUserUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
    FindUserUseCase,
    FindUserListUseCase,
  ],
  exports: [UserService],
})
export class UserModule {}
