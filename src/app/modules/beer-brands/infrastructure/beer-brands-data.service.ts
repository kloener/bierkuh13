import { Injectable } from '@angular/core';
import { Database } from '@angular/fire/database';
import { FirebaseConst } from '@app/constants/firestore';
import { CrudFirebaseDatabase } from '@app/core/crud-firebase-database';
import { BeerBrandsDto } from '@app/modules/beer-brands/models/beer-brands-dto';

@Injectable({
  providedIn: 'root'
})
export class BeerBrandsDataService extends CrudFirebaseDatabase<BeerBrandsDto> {
  constructor(private readonly database: Database) {
    super();
  }

  getPath(withIdentifier?: string): string {
    if (withIdentifier) {
      return `${FirebaseConst.beerBrands}/${withIdentifier}`;
    }

    return FirebaseConst.beerBrands;
  }

  getDatabase(): Database {
    return this.database;
  }
}
