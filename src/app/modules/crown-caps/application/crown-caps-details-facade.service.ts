import { Injectable } from '@angular/core';
import { CrownCapsListFacadeService } from './crown-caps-list-facade.service';
import { find, map, Observable, tap } from 'rxjs';
import { CrownCaps } from '../domain/crown-caps';

@Injectable({
  providedIn: 'root'
})
export class CrownCapsDetailsFacadeService {
  constructor(private readonly listFacadeService: CrownCapsListFacadeService) {}
  getDetailsOf(identifier: string): Observable<CrownCaps | undefined> {
    console.log('getDetailsOf', identifier)
    return this.listFacadeService.allCaps$.pipe(
      map(list => list[parseInt(identifier, 10)]),
      tap(item => {console.log('getDetailsOf->$', item)}),
    );
  }
}
