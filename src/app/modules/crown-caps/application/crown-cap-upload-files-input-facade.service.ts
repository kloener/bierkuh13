import { Injectable } from '@angular/core';
import {CrownCapsDataService} from "@app/modules/crown-caps/infrastructure/crown-caps-data.service";
import {CrownCapFilesApiService} from "@app/modules/crown-cap-files/api/crown-cap-files-api.service";

@Injectable({
  providedIn: 'root'
})
export class CrownCapUploadFilesInputFacadeService {

  constructor(
    private readonly infraService: CrownCapsDataService,
    private readonly fileApi: CrownCapFilesApiService
  ) { }

  createNewCaps(files: File[]) {
    return Promise.all([
      ...files.map(file => this.infraService.createCrownCapByFile(file)),
      ...files.map(file => this.fileApi.toCrownCaps.createFile(file)),
    ])
  }
}
