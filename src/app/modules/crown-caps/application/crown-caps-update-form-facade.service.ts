import {Injectable} from '@angular/core';
import {CrownCapsListFacadeService} from "@app/modules/crown-caps/application/crown-caps-list-facade.service";
import {concatMap, EMPTY, Observable} from "rxjs";
import {CrownCaps} from "@app/modules/crown-caps/domain/crown-caps";
import {CrownCapsInfraService} from "@app/modules/crown-caps/infrastructure/crown-caps-infra.service";
import {CrownCapsDto} from "@app/modules/crown-caps/domain/crown-caps-dto";
import {CrownCapFilesApiService} from "@app/modules/crown-cap-files/api/crown-cap-files-api.service";

@Injectable({
  providedIn: 'root'
})
export class CrownCapsUpdateFormFacadeService {

  constructor(
    private readonly listFacadeService: CrownCapsListFacadeService,
    private readonly infraService: CrownCapsInfraService,
    private readonly crownCapFilesApiService: CrownCapFilesApiService
  ) {}

  getDetailsOf(identifier: string): Observable<CrownCaps | undefined> {
    return this.listFacadeService.find(identifier);
  }

  getFileOf(identifier: string) {
    return this.listFacadeService.find(identifier).pipe(concatMap(cap => cap && cap.storageRef ? this.crownCapFilesApiService.toCrownCaps.getFileInfo(cap.storageRef) : EMPTY));
  }

  async update(crownCap: CrownCaps, newValues: Partial<CrownCaps>) {
    const updateDto: Partial<CrownCapsDto> = {
      name: newValues.name,
      assignees: newValues.assignees ? newValues.assignees.join('') : undefined,
      typ: newValues.type,
      jahr: newValues.year,
      kommentar: newValues.comment,
      brauerei: newValues.brewery,
      farbe: newValues.color,
      link: newValues.link,
      anzahl: newValues.count,
    };
    await this.infraService.updateInfo(crownCap, updateDto);
  }

}
