import {FullMetadata} from '@angular/fire/storage';

export class CrownCapFiles {
  static fromMetadata(metadata: FullMetadata): CrownCapFiles {
    return new CrownCapFiles(
      metadata.bucket,
      metadata.contentEncoding ?? '',
      metadata.contentType ?? '',
      metadata.fullPath,
      metadata.name,
      metadata.size,
      metadata.timeCreated,
      metadata.updated,
    );
  }

  bucket: string;
  contentEncoding: string;
  contentType: string;
  fullPath: string;
  name: string;
  size: number;
  timeCreated: Date;
  updated: Date;

  constructor(
    bucket: string,
    contentEncoding: string,
    contentType: string,
    fullPath: string,
    name: string,
    size: number,
    timeCreated: string,
    updated: string,
  ) {
    this.bucket = bucket;
    this.contentEncoding = contentEncoding;
    this.contentType = contentType;
    this.fullPath = fullPath;
    this.name = name;
    this.size = size;
    this.timeCreated = new Date(timeCreated);
    this.updated = new Date(updated);
  }
}
