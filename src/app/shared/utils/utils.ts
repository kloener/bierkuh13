import { environment } from '../../../environments/environment';

const {firebase} = environment;
const {storageBucket} = firebase;
const fileUriPrefix = `https://firebasestorage.googleapis.com/v0/b/${storageBucket}/o/`;
const fileUriSuffix = `?alt=media`;

export const utils: (firestorePath: string) => string = (firestorePath: string) => {
  const encodedPath = encodeURIComponent(firestorePath.substring(1));
  return `${fileUriPrefix}${encodedPath}${fileUriSuffix}`;
};

export const getStorageRefFromFileUri: (fileUri: string) => string = (fileUri: string) => {
  let firestorePath = fileUri.substring(fileUriPrefix.length);
  firestorePath = firestorePath.substring(0, firestorePath.length - fileUriSuffix.length);
  const decodedPath = decodeURIComponent(firestorePath);
  return `/${decodedPath}`;
};

export function encodeBase64(str: string): string { return btoa(encodeURIComponent(str)); }
export function decodeBase64(str: string): string { return decodeURIComponent(atob(str)); }
