import { Observable } from 'rxjs';

export interface IIdentifierGenerator {
  generate(): Promise<string>;
}

export interface ITimestampProvider {
  getCurrentTimestamp(): string;
}

export interface RepositoryItem<T> {
  identifier: string;
  json: T;
}

export interface ICrudRepository<T> {
  list(): Observable<RepositoryItem<T>[]>;
  create(dto: T): Promise<string>;
  update(identifier: string, dto: T): Promise<void>;
  remove(identifier: string): Promise<void>;
}