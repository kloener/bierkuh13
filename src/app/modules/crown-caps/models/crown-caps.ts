import { CrownCapsDto } from './crown-caps-dto';

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

  constructor(dto?: CrownCapsDto | null) {
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
