import { Injectable } from '@angular/core';
import { FirebaseConst } from '@app/constants/firestore';
import { Database, DatabaseReference, ref } from '@angular/fire/database';
import { list, QueryChange } from 'rxfire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrownCapsInfraService {
  ref: DatabaseReference;
  query: Observable<QueryChange[]>;
  constructor(database: Database) {
    this.ref = ref(database, FirebaseConst.capsName);
    this.query = list(this.ref);
  }
}