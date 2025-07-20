import { Injectable, inject } from '@angular/core';
import {CrownCapsListFacadeService} from './crown-caps-list-facade.service';
import {Observable} from 'rxjs';
import {CrownCaps} from '../domain/crown-caps';

@Injectable({
  providedIn: 'root'
})
export class CrownCapsDetailsFacadeService {
  private readonly listFacadeService = inject(CrownCapsListFacadeService);

  getDetailsOf(identifier: string): Observable<CrownCaps | undefined> {
    return this.listFacadeService.find(identifier);
  }
}
