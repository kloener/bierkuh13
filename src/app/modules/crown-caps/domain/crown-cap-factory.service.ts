import { Injectable } from '@angular/core';
import { FirebaseConst } from '@app/constants/firestore';
import { CrownCapsDto } from './crown-caps-dto';
import { CrownCapSnapshot } from './crown-cap-snapshot';
import { encodeBase64 } from '@app/shared/utils/utils';

export interface CrownCapCreationData {
  encodedName: string;
  storageRef: string;
  crownCapInfo: CrownCapsDto;
  file: {
    name: string;
    size: number;
    type: string;
  };
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class CrownCapFactoryService {
  
  createFromFile(file: File): CrownCapCreationData {
    const encodedName = encodeBase64(file.name);
    const storageRef = `${FirebaseConst.crownCapsFolder}/${file.name}`;
    const fileNameParts = this.parseFileName(file.name);
    
    return {
      encodedName,
      storageRef,
      crownCapInfo: this.createCrownCapInfo(fileNameParts),
      file: {
        name: file.name,
        size: file.size,
        type: file.type,
      },
      createdAt: new Date().toISOString(),
    };
  }

  private parseFileName(fileName: string): string[] {
    return fileName.replace(/\.(.+)$/, '').split('_');
  }

  private createCrownCapInfo(fileNameParts: string[]): CrownCapsDto {
    const [name, year, type, assignees] = fileNameParts;
    
    return {
      name: name || '',
      assignees: assignees || type || year || '',
      typ: assignees && year ? type : '',
      jahr: assignees || type ? year : '',
      kommentar: '',
      brauerei: '',
      farbe: '',
      link: '',
      anzahl: 0,
    };
  }
}