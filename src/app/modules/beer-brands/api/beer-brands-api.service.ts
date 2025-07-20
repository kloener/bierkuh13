import { Injectable, inject } from '@angular/core';
import {BeerBrandsFacadeService} from "@app/modules/beer-brands/application/beer-brands-facade.service";

@Injectable({
  providedIn: 'root'
})
export class BeerBrandsApiService {
  private readonly domainService = inject(BeerBrandsFacadeService);


  getBrandChangesForCrownCaps() { return this.domainService.getBrandChanges(); }
}
