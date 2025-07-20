import { Injectable, inject } from '@angular/core';

import { CrownCapsListFacadeService } from './crown-caps-list-facade.service';
import {pluck} from "rxjs";
import {BeerBrandsApiService} from "@app/modules/beer-brands/api/beer-brands-api.service";

@Injectable({
  providedIn: 'root'
})
export class CrownCapsSearchFacadeService {
  private readonly listFacadeService = inject(CrownCapsListFacadeService);
  private readonly beerBrandsApiService = inject(BeerBrandsApiService);


  constructor() {
    this.beerBrandsApiService.getBrandChangesForCrownCaps().subscribe(val => this.search(val));
  }

  getSearch(): string {
    return this.listFacadeService.getFilterSettings().search ?? '';
  }

  getSearchUpdates() { return this.listFacadeService.getFilterSettingsUpdates().pipe(pluck('search')); }

  search(search: string): void {
    const filterSettings = this.listFacadeService.getFilterSettings();
    this.listFacadeService.updateFilterSettings({
      limit: filterSettings.itemsPerPage,
      offset: 0,
      search,
    });
  }
}
