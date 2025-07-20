import { Injectable, inject } from '@angular/core';
import { Database } from '@angular/fire/database';
import { FirebaseConst } from '@app/constants/firestore';
import { CrudFirebaseDatabase } from '@app/core/crud-firebase-database';
import { BeerBrandsDto } from '@app/modules/beer-brands/models/beer-brands-dto';
import { NanoIdGenerator } from '@app/core/services/identifier-generator.service';
import { IsoTimestampProvider } from '@app/core/services/timestamp-provider.service';

@Injectable({
  providedIn: 'root'
})
export class BeerBrandsDataService extends CrudFirebaseDatabase<BeerBrandsDto> {
  private readonly database = inject(Database);

  constructor() {
    const identifierGenerator = inject(NanoIdGenerator);
    const timestampProvider = inject(IsoTimestampProvider);

    super(identifierGenerator, timestampProvider);
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
