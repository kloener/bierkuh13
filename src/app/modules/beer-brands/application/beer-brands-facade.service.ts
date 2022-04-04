import { Injectable } from '@angular/core';
import { BeerBrands } from '@app/modules/beer-brands/domain/beer-brands';
import { BeerBrandsDataService } from '@app/modules/beer-brands/infrastructure/beer-brands-data.service';
import { map, Observable, shareReplay, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerBrandsFacadeService {
  list$: Observable<BeerBrands[]>;

  private brandChangedSubject = new Subject<string>();

  constructor(private readonly data: BeerBrandsDataService) {
    this.list$ = this.data.list().pipe(
      map((eventList) =>
          eventList.map(
            ({identifier, json}) =>
              new BeerBrands(
                `${identifier}`,
                json
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
    return this.data.create({
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
