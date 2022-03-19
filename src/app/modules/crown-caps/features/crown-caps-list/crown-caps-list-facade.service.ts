import { Injectable } from '@angular/core';
import { CrownCapsApiService } from '../../api/crown-caps-api.service';
import { BehaviorSubject, map, Observable, pluck, shareReplay, Subject, switchMap } from 'rxjs';
import { CrownCapsDto } from '../../models/crown-caps-dto';
import { CrownCaps } from '../../models/crown-caps';
import { environment } from 'src/environments/environment';
import { CrownCapsInfraService } from '../../infra/crown-caps-infra.service';
import { QueryChange } from 'rxfire/database';

type SnapshotCrownCap = {
  crownCapInfo: CrownCapsDto;
  file: { name: string; size: number; type: string; };
  fileHash: string;
  storageRef: string;
};

type FilterSettings = {
  limit: number;
  offset: number;
  search?: string;
};

const getFileUri: (firestorePath: string) => string = (firestorePath: string) => {
  const {firebase} = environment;
  const {storageBucket} = firebase;
  const encodedPath = encodeURIComponent(firestorePath.substr(1));
  return `https://firebasestorage.googleapis.com/v0/b/${storageBucket}/o/${encodedPath}?alt=media`;
};

const increaseLimitAmount = 10;

@Injectable({
  providedIn: 'root'
})
export class CrownCapsListFacadeService {
  caps$: Observable<string[]>;
  private readonly query$: Observable<QueryChange[]>;
  private readonly filterSettings$ = new BehaviorSubject<FilterSettings>({ limit: increaseLimitAmount, offset: 0 });
  constructor(private readonly infraService: CrownCapsInfraService) {
    this.query$ = this.infraService.query;
    this.caps$ = this.filterSettings$
      .asObservable()
      .pipe(
        switchMap(
          ({limit, offset, search}) => this.query$
            .pipe(
              map(eventList => [...eventList]
                .map((event) => event.snapshot.toJSON() as SnapshotCrownCap)
                .filter((snapshotJson: SnapshotCrownCap) => search ? snapshotJson.crownCapInfo.name.toLowerCase().includes(search.toLowerCase()) : true)
                .map((snapshotJson: SnapshotCrownCap) => getFileUri(snapshotJson.storageRef))
                .slice(offset, limit)
              ),
            )
        ),
        shareReplay({
          bufferSize: 1,
          refCount: true,
        })
      )
  }

  loadMore(): void {
    const {limit, ...filterSettings} = this.filterSettings$.getValue();
    this.filterSettings$.next({
      ...filterSettings,
      limit: limit + increaseLimitAmount
    });
  }

  nextPage(): void {
    const {limit, offset, ...filterSettings} = this.filterSettings$.getValue();
    this.filterSettings$.next({
      ...filterSettings,
      offset: offset + increaseLimitAmount,
      limit: limit + increaseLimitAmount
    });
  }

  search(search: string): void {
    const filterSettings = this.filterSettings$.getValue();
    this.filterSettings$.next({
      ...filterSettings,
      search,
    });
  }
}
