import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

export interface IUrlBuilder {
  buildFileUrl(storagePath: string): string;
  extractStoragePath(fileUrl: string): string;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageUrlBuilder implements IUrlBuilder {
  private readonly fileUriPrefix: string;
  private readonly fileUriSuffix: string = '?alt=media';

  constructor() {
    const { firebase } = environment;
    const { storageBucket } = firebase;
    this.fileUriPrefix = `https://firebasestorage.googleapis.com/v0/b/${storageBucket}/o/`;
  }

  buildFileUrl(storagePath: string): string {
    const encodedPath = encodeURIComponent(storagePath.substring(1));
    return `${this.fileUriPrefix}${encodedPath}${this.fileUriSuffix}`;
  }

  extractStoragePath(fileUrl: string): string {
    let firestorePath = fileUrl.substring(this.fileUriPrefix.length);
    firestorePath = firestorePath.substring(0, firestorePath.length - this.fileUriSuffix.length);
    const decodedPath = decodeURIComponent(firestorePath);
    return `/${decodedPath}`;
  }
}

@Injectable({
  providedIn: 'root'
})
export class UrlBuilderService {
  constructor(private readonly firebaseUrlBuilder: FirebaseStorageUrlBuilder) {}

  buildFileUrl(storagePath: string): string {
    return this.firebaseUrlBuilder.buildFileUrl(storagePath);
  }

  extractStoragePath(fileUrl: string): string {
    return this.firebaseUrlBuilder.extractStoragePath(fileUrl);
  }
}