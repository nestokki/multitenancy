import { Nill, Optional } from '../type/native.type';

export const isNil = (v: unknown): v is Nill => v == null;

export const mapManyToOne = <T, R>(v: T | Nill, fn: (x: T) => R): R | Nill =>
  isNil(v) ? v : fn(v);

export const mapOneToMany = <T, R>(v: Optional<readonly T[]>, fn: (x: T) => R): Optional<R[]> =>
  isNil(v) ? v : v.map(fn);
