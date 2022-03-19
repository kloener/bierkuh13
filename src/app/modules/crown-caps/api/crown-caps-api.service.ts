import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CrownCapsListFacadeService } from '../application/crown-caps-list-facade.service';
import { CrownCaps } from '../domain/crown-caps';

@Injectable({
  providedIn: 'root'
})
export class CrownCapsApiService {
  caps$: Observable<CrownCaps[]>;
  constructor(private readonly listFacade: CrownCapsListFacadeService) {
    this.caps$ = this.listFacade.filteredCaps$;
  }
}
