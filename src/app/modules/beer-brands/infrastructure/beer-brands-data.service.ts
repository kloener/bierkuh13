import {Injectable} from '@angular/core';
import {Database, DatabaseReference, list, ref, remove, set} from "@angular/fire/database";
import {EMPTY, Observable, tap} from "rxjs";
import {FirebaseConst} from "@app/constants/firestore";
import {catchError} from "rxjs/operators";
import {QueryChange} from "rxfire/database";
import {BeerBrandsDto} from "@app/modules/beer-brands/models/beer-brands-dto";

@Injectable({
  providedIn: 'root'
})
export class BeerBrandsDataService {
  query: Observable<QueryChange[]>;
  private ref: DatabaseReference;

  constructor(private readonly database: Database) {
    this.ref = ref(database, FirebaseConst.beerBrands);
    this.query = list(this.ref).pipe(
      tap(results => console.log('BRANDS', results)),
      catchError(err => {
        alert(err.message);
        window.location.reload();
        return EMPTY;
      })
    );
  }

  async remove(identifier: string) {
    return remove(ref(this.database, `${FirebaseConst.beerBrands}/${identifier}`));
  }

  async upsert(identifier: string, dto: BeerBrandsDto) {
    return set(ref(this.database, `${FirebaseConst.beerBrands}/${identifier}`), {
      ...dto
    });
  }
}
