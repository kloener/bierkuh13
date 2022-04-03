import { Injectable } from '@angular/core';
import {map, Observable, shareReplay, Subject} from "rxjs";
import {BeerBrands} from "@app/modules/beer-brands/domain/beer-brands";
import {BeerBrandsDataService} from "@app/modules/beer-brands/infrastructure/beer-brands-data.service";
import {BeerBrandsDto} from "@app/modules/beer-brands/models/beer-brands-dto";

@Injectable({
  providedIn: 'root'
})
export class BeerBrandsFacadeService {
  list$: Observable<BeerBrands[]>;

  private brandChangedSubject = new Subject<string>();

  constructor(private readonly data: BeerBrandsDataService) {
    this.list$ = this.data.query.pipe(
      map((eventList) =>
        [...eventList]
          .map((event) => ({identifier: event.snapshot.key, snapshotJson: event.snapshot.toJSON() as BeerBrandsDto}))
          .map(
            ({identifier, snapshotJson}) =>
              new BeerBrands(
                `${identifier}`,
                snapshotJson
              )
          )
          .sort((a: BeerBrands, b: BeerBrands) => a.name.localeCompare(b.name))
      ),
      shareReplay({
        bufferSize: 1,
        refCount: false,
      })
    )
  }

  create(value: string) {
    return this.data.upsert(Math.random().toString(16).substring(2), {
      name: value,
    });
  }

  remove(brand: BeerBrands) {
    return this.data.remove(brand.id);
  }

  getBrandChanges(): Observable<string> {
    return this.brandChangedSubject.asObservable();
  }

  brandChanged(value: string) {
    this.brandChangedSubject.next(value);
  }
}
