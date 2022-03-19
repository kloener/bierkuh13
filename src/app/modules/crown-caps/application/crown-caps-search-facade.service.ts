import { Injectable } from '@angular/core';

import { CrownCapsListFacadeService } from './crown-caps-list-facade.service';

@Injectable({
  providedIn: 'root'
})
export class CrownCapsSearchFacadeService {

  constructor(private readonly listFacadeService: CrownCapsListFacadeService) {}

  search(search: string): void {
    const filterSettings = this.listFacadeService.getFilterSettings();
    this.listFacadeService.updateFilterSettings({
      limit: filterSettings.itemsPerPage,
      offset: 0,
      search,
    });
  }
}
