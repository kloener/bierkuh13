import { Injectable } from '@angular/core';
import { FirebaseConst } from '@app/constants/firestore';
import { Database, DatabaseReference, ref, object, set } from '@angular/fire/database';
import { list, QueryChange } from 'rxfire/database';
import { EMPTY, firstValueFrom, Observable } from 'rxjs';
import { catchError } from "rxjs/operators";
import { CrownCaps } from "@app/modules/crown-caps/domain/crown-caps";
import { CrownCapsDto } from "@app/modules/crown-caps/domain/crown-caps-dto";
import { CrownCapSnapshot } from "@app/modules/crown-caps/domain/crown-cap-snapshot";
import { CrownCapFactoryService } from '../domain/crown-cap-factory.service';
import { CrudFirebaseDatabase } from '@app/core/crud-firebase-database';
import { NanoIdGenerator } from '@app/core/services/identifier-generator.service';
import { IsoTimestampProvider } from '@app/core/services/timestamp-provider.service';

@Injectable({
  providedIn: 'root'
})
export class CrownCapsDataService extends CrudFirebaseDatabase<CrownCapSnapshot> {
  query: Observable<QueryChange[]>;

  constructor(
    private readonly database: Database,
    private readonly crownCapFactory: CrownCapFactoryService,
    identifierGenerator: NanoIdGenerator,
    timestampProvider: IsoTimestampProvider
  ) {
    super(identifierGenerator, timestampProvider);
    this.query = list(ref(this.database, this.getPath())).pipe(
      catchError(err => {
        alert(err.message);
        window.location.reload();
        return EMPTY;
      })
    );
  }

  getPath(withIdentifier?: string): string {
    return withIdentifier 
      ? `${FirebaseConst.capsName}/${withIdentifier}`
      : FirebaseConst.capsName;
  }

  getDatabase(): Database {
    return this.database;
  }

  async updateInfo(crownCap: CrownCaps, updateDto: Partial<CrownCapsDto>): Promise<void> {
    const snapshot = await this.getSnapshot(crownCap.identifier);
    if (!snapshot) {
      throw new Error(`Crown cap with identifier ${crownCap.identifier} not found`);
    }

    const updateSnapshotDto: CrownCapSnapshot = {
      ...snapshot,
      crownCapInfo: {
        ...snapshot.crownCapInfo,
        ...updateDto,
      },
    };
    
    await this.update(crownCap.identifier, updateSnapshotDto);
  }

  async removeCrownCap(identifier: string): Promise<void> {
    await this.remove(identifier);
  }

  async createCrownCapByFile(file: File): Promise<string> {
    const crownCapData = this.crownCapFactory.createFromFile(file);
    const snapshot: CrownCapSnapshot = {
      crownCapInfo: crownCapData.crownCapInfo,
      file: crownCapData.file,
      fileHash: '', // Will be set when file is uploaded
      storageRef: crownCapData.storageRef,
    };
    return await this.create(snapshot);
  }

  private async getSnapshot(identifier: string): Promise<CrownCapSnapshot | null> {
    const capRef = ref(this.database, this.getPath(identifier));
    const dbSnapshot = await firstValueFrom(object(capRef));
    return dbSnapshot.snapshot.toJSON() as CrownCapSnapshot | null;
  }
}
