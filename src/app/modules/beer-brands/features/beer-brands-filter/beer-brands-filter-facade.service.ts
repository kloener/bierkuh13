import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {BeerBrands} from "@app/modules/beer-brands/domain/beer-brands";
import {BeerBrandsFacadeService} from "@app/modules/beer-brands/application/beer-brands-facade.service";

@Injectable({
  providedIn: 'root'
})
export class BeerBrandsFilterFacadeService {
  list$: Observable<BeerBrands[]>;
  constructor(private readonly domainService: BeerBrandsFacadeService) {
    this.list$ = this.domainService.list$;
  }

  brandChanged(value: string) {
  this.domainService.brandChanged(value);
  }
}
