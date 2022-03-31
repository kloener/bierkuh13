import {Injectable} from '@angular/core';
import {CrownCapsListFacadeService} from "@app/modules/crown-caps/application/crown-caps-list-facade.service";
import {Observable} from "rxjs";
import {CrownCaps} from "@app/modules/crown-caps/domain/crown-caps";

@Injectable({
  providedIn: 'root'
})
export class CrownCapsUpdateFormFacadeService {

  constructor(private readonly listFacadeService: CrownCapsListFacadeService) {}

  getDetailsOf(identifier: string): Observable<CrownCaps | undefined> {
    return this.listFacadeService.find(+identifier);
  }

}
