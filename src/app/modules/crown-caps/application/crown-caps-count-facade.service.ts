import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { CrownCapsListFacadeService } from './crown-caps-list-facade.service';

@Injectable({
  providedIn: 'root'
})
export class CrownCapsCountFacadeService {
  filterCount$: Observable<number>;
  overallCount$: Observable<number>;
  constructor(private readonly listFacadeService: CrownCapsListFacadeService) {
    this.overallCount$ = this.listFacadeService.allCaps$.pipe(map(list => list.length));
    this.filterCount$ = this.listFacadeService.filteredCaps$.pipe(map(list => list.length));
  }
}
