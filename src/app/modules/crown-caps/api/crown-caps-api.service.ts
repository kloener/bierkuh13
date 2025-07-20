import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { CrownCapsListFacadeService } from '../application/crown-caps-list-facade.service';
import { CrownCaps } from '../domain/crown-caps';

@Injectable({
  providedIn: 'root'
})
export class CrownCapsApiService {
  private readonly listFacade = inject(CrownCapsListFacadeService);

  caps$: Observable<CrownCaps[]>;
  constructor() {
    this.caps$ = this.listFacade.filteredCaps$;
  }
}
