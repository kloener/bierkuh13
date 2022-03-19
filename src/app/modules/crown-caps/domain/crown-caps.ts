import { getFileUri } from '@app/shared/utils/getFileUri';

import { CrownCapsDto } from './crown-caps-dto';
import { FileInfo } from './file-info';

export class CrownCaps {
  count?: number;
  link?: string;
  color?: string;
  brewery?: string;
  comment?: string;
  year?: string;
  type?: string;
  assignees?: string[];
  name: string;
  fileName?: string;
  fileSize?: number;
  fileType?: string;
  storageRef?: string;

  constructor(dto?: CrownCapsDto | null, fileInfo?: FileInfo, storageRef?: string) {
    this.name = '';

    if (dto) {
      this.name = dto.name;

      if (dto.assignees) this.assignees = dto.assignees.split('');
      if (dto.typ) this.type = dto.typ;
      if (dto.jahr) this.year = dto.jahr;
      if (dto.kommentar) this.comment = dto.kommentar;
      if (dto.brauerei) this.brewery = dto.brauerei;
      if (dto.farbe) this.color = dto.farbe;
      if (dto.link) this.link = dto.link;
      if (dto.anzahl) this.count = dto.anzahl;
    }

    if (fileInfo) {
      this.fileName = fileInfo.name
      this.fileSize = fileInfo.size
      this.fileType = fileInfo.type;
    }

    if (storageRef) {
      this.storageRef = getFileUri(storageRef);
    }
  }

  toDto(): CrownCapsDto {
    return {
      name: this.name,
      assignees: this.assignees ? this.assignees.join('') : '',
      typ: this.type ? this.type : '',
      jahr: this.year ? this.year : '',
      kommentar: this.comment ? this.comment : '',
      brauerei: this.brewery ? this.brewery : '',
      farbe: this.color ? this.color : '',
      link: this.link ? this.link : '',
      anzahl: this.count ? this.count : 0,
    }
  }
}
