import { Injectable, inject } from '@angular/core';
import {Observable} from "rxjs";
import {BeerBrands} from "@app/modules/beer-brands/domain/beer-brands";
import {BeerBrandsFacadeService} from "@app/modules/beer-brands/application/beer-brands-facade.service";

@Injectable({
  providedIn: 'root'
})
export class BeerBrandsManageFacadeService {
  private readonly domainService = inject(BeerBrandsFacadeService);

  list$: Observable<BeerBrands[]>;
  constructor() {
    this.list$ = this.domainService.list$;
  }

  create(value: string) {
  return this.domainService.create(value);
  }

  remove(brand: BeerBrands) {
return this.domainService.remove(brand);
  }
}
