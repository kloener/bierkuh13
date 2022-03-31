import { Injectable } from '@angular/core';
import { FirebaseConst } from '@app/constants/firestore';
import {Database, DatabaseReference, ref, object, set} from '@angular/fire/database';
import { list, QueryChange } from 'rxfire/database';
import {EMPTY, firstValueFrom, Observable} from 'rxjs';
import {catchError} from "rxjs/operators";
import {CrownCaps} from "@app/modules/crown-caps/domain/crown-caps";
import {CrownCapsDto} from "@app/modules/crown-caps/domain/crown-caps-dto";
import {CrownCapSnapshot} from "@app/modules/crown-caps/domain/crown-cap-snapshot";

@Injectable({
  providedIn: 'root'
})
export class CrownCapsInfraService {
  ref: DatabaseReference;
  query: Observable<QueryChange[]>;

  constructor(private readonly database: Database) {
    this.ref = ref(database, FirebaseConst.capsName);
    this.query = list(this.ref).pipe(catchError(err => {
      alert(err.message);
      window.location.reload();
      return EMPTY;
    }));
  }

  async updateInfo(crownCap: CrownCaps, updateDto: Partial<CrownCapsDto>) {
    const capRef = ref(this.database, `${FirebaseConst.capsName}/${crownCap.identifier}`);
    const dbSnapshot = await firstValueFrom(object(capRef));
    const snapshot = dbSnapshot.snapshot.toJSON() as CrownCapSnapshot | null;

    if (!snapshot) {
      console.warn('Could not convert snapshot JSON');
      return;
    }

    console.info('Got data', 'snapshot:', snapshot, 'updateDto:', updateDto);
    const updateSnapshotDto: CrownCapSnapshot = {
      ...snapshot,
      crownCapInfo: {
        ...snapshot.crownCapInfo,
        ...updateDto,
      },
    };
    const updateResult = await set(capRef, updateSnapshotDto);

    console.info('Updated snappi', updateResult)
  }
}
