import { Injectable, inject } from '@angular/core';
import {CrownCapsListFacadeService} from "@app/modules/crown-caps/application/crown-caps-list-facade.service";
import {CrownCapsDataService} from "@app/modules/crown-caps/infrastructure/crown-caps-data.service";
import {CrownCaps} from "@app/modules/crown-caps/domain/crown-caps";
import {CrownCapFilesApiService} from "@app/modules/crown-cap-files/api/crown-cap-files-api.service";

@Injectable({
  providedIn: 'root'
})
export class CrownCapsTableFacadeService {
  private readonly listFacadeService = inject(CrownCapsListFacadeService);
  private readonly infraService = inject(CrownCapsDataService);
  private readonly fileApi = inject(CrownCapFilesApiService);

  pagesCaps$ = this.listFacadeService.pagesCaps$;
  pageInfo$ = this.listFacadeService.pageInfo$;

  setPage(pageNumber:number) { this.listFacadeService.setPage(pageNumber); }

  removeCrownCap(crownCap: CrownCaps) {
    return Promise.all([
      this.infraService.removeCrownCap(crownCap.identifier),
      this.fileApi.toCrownCaps.removeFile(crownCap.storageRef),
    ]);
  }
}
