import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';

import { CrownCapsListFacadeService } from './crown-caps-list-facade.service';

@Injectable({
  providedIn: 'root'
})
export class CrownCapsCountFacadeService {
  private readonly listFacadeService = inject(CrownCapsListFacadeService);

  filterCount$: Observable<number>;
  overallCount$: Observable<number>;
  constructor() {
    this.overallCount$ = this.listFacadeService.allCaps$.pipe(map(list => list.length));
    this.filterCount$ = this.listFacadeService.filteredCaps$.pipe(map(list => list.length));
  }
}
