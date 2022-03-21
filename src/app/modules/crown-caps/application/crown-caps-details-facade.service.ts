import { Injectable } from '@angular/core';
import { CrownCapsListFacadeService } from './crown-caps-list-facade.service';
import { map, Observable } from 'rxjs';
import { CrownCaps } from '../domain/crown-caps';

@Injectable({
  providedIn: 'root'
})
export class CrownCapsDetailsFacadeService {
  constructor(private readonly listFacadeService: CrownCapsListFacadeService) {}
  getDetailsOf(identifier: string): Observable<CrownCaps | undefined> {
    return this.listFacadeService.allCaps$.pipe(map(list => list.find(item => item.name === identifier)));
  }
}
