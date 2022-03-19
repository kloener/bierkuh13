import { environment } from 'src/environments/environment';

export const getFileUri: (firestorePath: string) => string = (firestorePath: string) => {
  const {firebase} = environment;
  const {storageBucket} = firebase;
  const encodedPath = encodeURIComponent(firestorePath.substr(1));
  return `https://firebasestorage.googleapis.com/v0/b/${storageBucket}/o/${encodedPath}?alt=media`;
};
