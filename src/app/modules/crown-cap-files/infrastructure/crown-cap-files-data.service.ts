import {Injectable} from '@angular/core';
import {getMetadata, ref,  uploadBytes, deleteObject, Storage, StorageReference} from '@angular/fire/storage';
import {FirebaseConst} from "@app/constants/firestore";
import {CrownCapFiles} from "@app/modules/crown-cap-files/domain/crown-cap-files";

@Injectable({
  providedIn: 'root'
})
export class CrownCapFilesDataService {
  private readonly folderRef: StorageReference;

  constructor(private readonly storage: Storage) {
    this.folderRef = ref(this.storage, FirebaseConst.crownCapsFolder);
  }

  async getFile(relativePath: string): Promise<CrownCapFiles> {
    const fileRef = ref(this.storage, `${FirebaseConst.crownCapsFolder}/${relativePath}`)
    return CrownCapFiles.fromMetadata(await getMetadata(fileRef));
  }

  async removeFile(relativePath: string) {
    const fileRef = ref(this.storage, `${FirebaseConst.crownCapsFolder}/${relativePath}`)
    return deleteObject(fileRef);
  }

  async createFile(file: File) {
    const fileRef = ref(this.storage, `${FirebaseConst.crownCapsFolder}/${file.name}`)
    return uploadBytes(fileRef, file);
  }
}
