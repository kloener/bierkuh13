import { FirebaseStorageUrlBuilder } from './url-builder.service';
import { Base64Encoder } from './encoding.service';

// Backward compatibility - create instances for legacy function exports
const urlBuilder = new FirebaseStorageUrlBuilder();
const encoder = new Base64Encoder();

export const utils: (firestorePath: string) => string = (firestorePath: string) => {
  return urlBuilder.buildFileUrl(firestorePath);
};

export const getStorageRefFromFileUri: (fileUri: string) => string = (fileUri: string) => {
  return urlBuilder.extractStoragePath(fileUri);
};

export function encodeBase64(str: string): string {
  return encoder.encode(str);
}

export function decodeBase64(str: string): string {
  return encoder.decode(str);
}
