import { SetMetadata } from '@nestjs/common';
import { RequestScope } from '../type/request-scope.type';

export const TRANSACTIONAL_KEY = Symbol('TRANSACTIONAL');
export const Transactional = (scope: RequestScope) => SetMetadata(TRANSACTIONAL_KEY, scope);
