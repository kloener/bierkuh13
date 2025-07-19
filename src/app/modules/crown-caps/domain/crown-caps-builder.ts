import { CrownCaps } from './crown-caps';
import { CrownCapsDto } from './crown-caps-dto';
import { FileInfo } from './file-info';
import { UrlBuilderService } from '@app/shared/utils/url-builder.service';

export class CrownCapsBuilder {
  private crownCap: CrownCaps;

  constructor(
    index: number, 
    identifier: string,
    private readonly urlBuilder?: UrlBuilderService
  ) {
    this.crownCap = new CrownCaps();
    this.crownCap.index = index;
    this.crownCap.identifier = identifier;
    this.crownCap.name = '';
  }

  fromDto(dto: CrownCapsDto | null): CrownCapsBuilder {
    if (!dto) return this;

    this.crownCap.name = dto.name;
    this.crownCap.assignees = this.parseAssignees(dto.assignees);
    this.crownCap.type = dto.typ;
    this.crownCap.year = dto.jahr;
    this.crownCap.comment = dto.kommentar;
    this.crownCap.brewery = dto.brauerei;
    this.crownCap.color = dto.farbe;
    this.crownCap.link = dto.link;
    this.crownCap.count = dto.anzahl;

    return this;
  }

  withFileInfo(fileInfo: FileInfo): CrownCapsBuilder {
    this.crownCap.fileName = fileInfo.name;
    this.crownCap.fileSize = fileInfo.size;
    this.crownCap.fileType = fileInfo.type;
    return this;
  }

  withStorageRef(storageRef: string): CrownCapsBuilder {
    this.crownCap.storageRef = this.urlBuilder 
      ? this.urlBuilder.buildFileUrl(storageRef)
      : storageRef;
    return this;
  }

  build(): CrownCaps {
    return this.crownCap;
  }

  private parseAssignees(assignees?: string): string[] | undefined {
    return assignees ? assignees.split('') : undefined;
  }
}