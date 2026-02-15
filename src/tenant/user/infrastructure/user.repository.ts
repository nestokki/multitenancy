import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RepositoryService } from 'src/infra/type-orm/database/service/repository.service';
import { UserCreateProps, UserUpdateProps } from '../domain/user.type';
import { UserDomain } from '../domain/user.domain';
import { UserEntity } from './user.entity';
import { UserMapper } from './user.mapper';

@Injectable()
export class UserRepository {
  constructor(private readonly repositoryService: RepositoryService) {}

  private repository(): Repository<UserEntity> {
    return this.repositoryService.get(UserEntity);
  }

  async createUser(props: UserCreateProps): Promise<void> {
    await this.repository().save(UserMapper.toEntity(props));
  }

  async updateUser(idx: number, props: UserUpdateProps): Promise<void> {
    await this.repository().update({ idx }, UserMapper.toPartialEntity(props));
  }

  async deleteUser(idx: number): Promise<void> {
    await this.repository().delete({ idx });
  }

  async findUserByIdx(idx: number): Promise<UserDomain | null> {
    const entity = await this.repository()
      .createQueryBuilder('user')
      .where('user.idx = :idx', { idx })
      .getOne();

    return entity && UserMapper.toDomain(entity);
  }

  async findUserList(): Promise<UserDomain[]> {
    const entities = await this.repository()
      .createQueryBuilder('user')
      .orderBy('user.createdAt', 'DESC')
      .getMany();

    return entities.map(UserMapper.toDomain);
  }
}
