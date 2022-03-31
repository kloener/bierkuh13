import { Injectable } from '@angular/core';
import { FirebaseConst } from '@app/constants/firestore';
import {Database, DatabaseReference, ref, object, set, remove} from '@angular/fire/database';
import { list, QueryChange } from 'rxfire/database';
import {EMPTY, firstValueFrom, Observable} from 'rxjs';
import {catchError} from "rxjs/operators";
import {CrownCaps} from "@app/modules/crown-caps/domain/crown-caps";
import {CrownCapsDto} from "@app/modules/crown-caps/domain/crown-caps-dto";
import {CrownCapSnapshot} from "@app/modules/crown-caps/domain/crown-cap-snapshot";
import {encodeBase64} from "@app/shared/utils/utils";

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

    const updateSnapshotDto: CrownCapSnapshot = {
      ...snapshot,
      crownCapInfo: {
        ...snapshot.crownCapInfo,
        ...updateDto,
      },
    };
    return set(capRef, updateSnapshotDto);
  }

  async removeCrownCap(identifier: string) {
    return remove(ref(this.database, `${FirebaseConst.capsName}/${identifier}`));
  }

  async createCrownCapByFile(file: File) {
    const encodedName = encodeBase64(file.name);
    const storageRef = `${FirebaseConst.crownCapsFolder}/${file.name}`;
    const [name, year, type, assignees] = file.name.replace(/\.(.+)$/, '').split('_');
    const crownCapInfo: CrownCapsDto = {
      name,
      assignees: assignees || type || year || '',
      typ: assignees && year ? type : '',
      jahr: assignees || type ? year : '',
      kommentar: '',
      brauerei: '',
      farbe: '',
      link: '',
      anzahl: 0,
    }
    return set(ref(this.database, `${FirebaseConst.capsName}/${encodedName}`), {
      crownCapInfo,
      file: {
        name: file.name,
        size: file.size,
        type: file.type,
      },
      createdAt: new Date().toISOString(),
      storageRef,
    });
  }
}
