import { Injectable } from '@angular/core';
import { FirebaseConst } from '@app/constants/firestore';
import { Database, DatabaseReference, ref } from '@angular/fire/database';
import { list, QueryChange } from 'rxfire/database';
import {EMPTY, Observable} from 'rxjs';
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CrownCapsInfraService {
  ref: DatabaseReference;
  query: Observable<QueryChange[]>;
  constructor(database: Database) {
    this.ref = ref(database, FirebaseConst.capsName);
    this.query = list(this.ref).pipe(catchError(err => {
      alert(err.message);
      window.location.reload();
      return EMPTY;
    }));
  }
}
