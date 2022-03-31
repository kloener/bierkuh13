import {Injectable} from '@angular/core';
import {CrownCapsListFacadeService} from "@app/modules/crown-caps/application/crown-caps-list-facade.service";
import {CrownCapsInfraService} from "@app/modules/crown-caps/infrastructure/crown-caps-infra.service";
import {CrownCaps} from "@app/modules/crown-caps/domain/crown-caps";

@Injectable({
  providedIn: 'root'
})
export class CrownCapsTableFacadeService {
  pagesCaps$ = this.listFacadeService.pagesCaps$;
  pageInfo$ = this.listFacadeService.pageInfo$;

  constructor(private readonly listFacadeService: CrownCapsListFacadeService, private readonly infraService: CrownCapsInfraService) {}

  setPage(pageNumber:number) { this.listFacadeService.setPage(pageNumber); }

  removeCrownCap(crownCap: CrownCaps) { return this.infraService.removeCrownCap(crownCap.identifier); }
}
