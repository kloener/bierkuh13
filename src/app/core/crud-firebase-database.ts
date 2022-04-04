import { Database, ref, remove, set, update } from '@angular/fire/database';
import { list } from 'rxfire/database';
import { map, Observable } from 'rxjs';

import { generateId } from './generate-id.funct';

export abstract class CrudFirebaseDatabase<T> {
  /**
   * @param withIdentifier if provided returns the path to the identifier, otherwise to the list.
   */
  abstract getPath(withIdentifier?: string): string;
  abstract getDatabase(): Database;

  /**
   *
   * @returns returns list of query changes that can then be converted to your model.
   */
  list(): Observable<{ identifier: string; json: T}[]> {
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
  async remove(identifier: string) {
    return remove(ref(this.getDatabase(), this.getPath(identifier)));
  }

  /**
   * create new entry
   * @param dto
   * @returns generated id on success.
   */
  async create(dto: T) {
    const identifier = await generateId();
    await set(ref(this.getDatabase(), this.getPath(identifier)), {
      ...dto,
      _createdAt: new Date().toISOString()
    });
    return identifier;
  }

  /**
   * update existing entry.
   * @param identifier
   * @param dto
   * @returns
   */
  async update(identifier: string, dto: T) {
    return update(ref(this.getDatabase(), this.getPath(identifier)), {
      ...dto,
      _updatedAt: new Date().toISOString()
    });
  }
}
