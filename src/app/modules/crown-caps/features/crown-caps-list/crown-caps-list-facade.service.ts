import { Injectable } from '@angular/core';
import { CrownCapsApiService } from '../../api/crown-caps-api.service';
import { map, Observable, pluck, shareReplay } from 'rxjs';
import { CrownCapsDto } from '../../models/crown-caps-dto';
import { CrownCaps } from '../../models/crown-caps';
import { environment } from 'src/environments/environment';

type SnapshotCrownCap = {
  crownCapInfo: CrownCapsDto;
  file: { name: string; size: number; type: string; };
  fileHash: string;
  storageRef: string;
};

const getFileUri: (firestorePath: string) => string = (firestorePath: string) => {
  const {firebase} = environment;
  const {storageBucket} = firebase;
  const encodedPath = encodeURIComponent(firestorePath.substr(1));
  return `https://firebasestorage.googleapis.com/v0/b/${storageBucket}/o/${encodedPath}?alt=media`;
};

@Injectable({
  providedIn: 'root'
})
export class CrownCapsListFacadeService {
  caps$: Observable<any>;

  constructor(private readonly apiService: CrownCapsApiService) {
    this.caps$ = this.apiService.caps$.pipe(
      map(events => {
        console.log(events[0]);
        return events
          .map((event: { snapshot: { toJSON: () => SnapshotCrownCap; }; }) => event.snapshot.toJSON())
          .map((snapshotJson: SnapshotCrownCap) => getFileUri(snapshotJson.storageRef))
          /*
          .map((snapshotJson: SnapshotCrownCap) => snapshotJson.crownCapInfo)
          .map((capInfo: CrownCapsDto) => new CrownCaps(capInfo))
          /* */
      }
      ),
      shareReplay({
        bufferSize: 1, refCount: true,
      })
    );
  }
}
