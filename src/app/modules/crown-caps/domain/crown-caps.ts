import { CrownCapsDto } from './crown-caps-dto';
import { FileInfo } from './file-info';

export class CrownCaps {
  index: number = 0;
  identifier: string = '';
  count?: number;
  link?: string;
  color?: string;
  brewery?: string;
  comment?: string;
  year?: string;
  type?: string;
  assignees?: string[];
  name: string = '';
  fileName?: string;
  fileSize?: number;
  fileType?: string;
  storageRef?: string;

  constructor() {
    // Empty constructor - use builder for construction
  }

  toDto(): CrownCapsDto {
    return {
      name: this.name,
      assignees: this.assignees?.join('') ?? '',
      typ: this.type ?? '',
      jahr: this.year ?? '',
      kommentar: this.comment ?? '',
      brauerei: this.brewery ?? '',
      farbe: this.color ?? '',
      link: this.link ?? '',
      anzahl: this.count ?? 0,
    };
  }
}
