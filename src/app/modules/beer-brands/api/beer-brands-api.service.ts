import { Injectable } from '@angular/core';
import {BeerBrandsFacadeService} from "@app/modules/beer-brands/application/beer-brands-facade.service";

@Injectable({
  providedIn: 'root'
})
export class BeerBrandsApiService {

  constructor(private readonly domainService: BeerBrandsFacadeService) { }

  getBrandChangesForCrownCaps() { return this.domainService.getBrandChanges(); }
}
