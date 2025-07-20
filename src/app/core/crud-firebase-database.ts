import { Injectable, inject } from '@angular/core';
import { Database, ref, remove, set, update } from '@angular/fire/database';
import { list } from 'rxfire/database';
import { map, Observable } from 'rxjs';

import { IIdentifierGenerator, ITimestampProvider, ICrudRepository, RepositoryItem } from './interfaces/repository.interfaces';
import { NanoIdGenerator } from './services/identifier-generator.service';
import { IsoTimestampProvider } from './services/timestamp-provider.service';

export abstract class CrudFirebaseDatabase<T> implements ICrudRepository<T> {
  constructor(
    protected readonly identifierGenerator: IIdentifierGenerator,
    protected readonly timestampProvider: ITimestampProvider,
  ) {}

  /**
   * @param withIdentifier if provided returns the path to the identifier, otherwise to the list.
   */
  abstract getPath(withIdentifier?: string): string;
  abstract getDatabase(): Database;

  /**
   *
   * @returns returns list of query changes that can then be converted to your model.
   */
  list(): Observable<RepositoryItem<T>[]> {
    const listRef = ref(this.getDatabase(), this.getPath());
    return list(listRef).pipe(
      map(eventList => eventList.map(event => {
        const raw: object | null = event.snapshot.toJSON();
        const json: T = raw as unknown as T;
        return { identifier: `${event.snapshot.key}`, json };
      }))
    );
  }

  /**
   * remove single entry
   * @param identifier
   * @returns
   */
  async remove(identifier: string): Promise<void> {
    await remove(ref(this.getDatabase(), this.getPath(identifier)));
  }

  /**
   * create new entry
   * @param dto
   * @returns generated id on success.
   */
  async create(dto: T): Promise<string> {
    const identifier = await this.identifierGenerator.generate();
    await set(ref(this.getDatabase(), this.getPath(identifier)), {
      ...dto,
      _createdAt: this.timestampProvider.getCurrentTimestamp()
    });
    return identifier;
  }

  /**
   * update existing entry.
   * @param identifier
   * @param dto
   * @returns
   */
  async update(identifier: string, dto: T): Promise<void> {
    await update(ref(this.getDatabase(), this.getPath(identifier)), {
      ...dto,
      _updatedAt: this.timestampProvider.getCurrentTimestamp()
    });
  }
}
