import {Injectable} from '@angular/core';
import {CrownCapFilesDataService} from "@app/modules/crown-cap-files/infrastructure/crown-cap-files-data.service";
import {FirebaseConst} from "@app/constants/firestore";
import {getStorageRefFromFileUri} from "@app/shared/utils/utils";

function toRelativeStoragePath(absoluteStorageRef: string) {
  const pathFromRoot = getStorageRefFromFileUri(absoluteStorageRef);
  return pathFromRoot.replace(`${FirebaseConst.crownCapsFolder}/`, '');
}

@Injectable({
  providedIn: 'root'
})
export class CrownCapFilesApiService {
  toCrownCaps = {
    getFileInfo: (absoluteStorageRef: string) => {
      const pathFromRoot = getStorageRefFromFileUri(absoluteStorageRef);
      const relativePath = pathFromRoot.replace(`${FirebaseConst.crownCapsFolder}/`, '');
      return this.infraService.getFile(relativePath);
    },
    removeFile: (absoluteStorageRef?: string) => {
      if (!absoluteStorageRef) {
        return;
      }
      const relativePath = toRelativeStoragePath(absoluteStorageRef);
      return this.infraService.removeFile(relativePath);
    },
    createFile: (file: File) => this.infraService.createFile(file),
  }

  constructor(private readonly infraService: CrownCapFilesDataService) { }
}
