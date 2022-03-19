import { Injectable } from '@angular/core';
import { QueryChange } from 'rxfire/database';
import { BehaviorSubject, map, Observable, shareReplay, switchMap } from 'rxjs';

import { CrownCaps } from '../domain/crown-caps';
import { CrownCapsDto } from '../domain/crown-caps-dto';
import { FileInfo } from '../domain/file-info';
import { CrownCapsInfraService } from '../infrastructure/crown-caps-infra.service';

type SnapshotCrownCap = {
  crownCapInfo: CrownCapsDto;
  file: FileInfo;
  fileHash: string;
  storageRef: string;
};

type FilterSettings = {
  limit: number;
  offset: number;
  itemsPerPage: number;
  search?: string;
};

const DEFAULT_ITEMS_PER_PAGE = 10;

/**
 * List facade that provides all, filtered and a paged caps list observable.
 */
@Injectable({
  providedIn: 'root'
})
export class CrownCapsListFacadeService {
  /**
   * list of all available caps
   */
  allCaps$: Observable<CrownCaps[]>;

  /**
   * filtered list of caps
   * @see search
   */
  filteredCaps$: Observable<CrownCaps[]>;

  /**
   * Paged list of caps.
   * @see loadMore
   * @see nextPage
   */
  pagesCaps$: Observable<CrownCaps[]>;

  private readonly query$: Observable<QueryChange[]>;
  private readonly filterSettings$ = new BehaviorSubject<FilterSettings>({ itemsPerPage: DEFAULT_ITEMS_PER_PAGE, limit: DEFAULT_ITEMS_PER_PAGE, offset: 0 });

  constructor(private readonly infraService: CrownCapsInfraService) {
    /**
     * root of all data
     */
    this.query$ = this.infraService.query;

    /**
     * map "QueryChange" list to snaphshot and CrownCaps
     */
    this.allCaps$ = this.query$.pipe(
      map(eventList => [...eventList]
        .map((event) => event.snapshot.toJSON() as SnapshotCrownCap)
        .map((snapshotJson: SnapshotCrownCap) => new CrownCaps(snapshotJson.crownCapInfo, snapshotJson.file, snapshotJson.storageRef))
      ),
      shareReplay({
        bufferSize: 1,
        refCount: true,
      })
    );

    /**
     * List of crown caps that match the current "search"
     */
    this.filteredCaps$ = this.filterSettings$
      .asObservable()
      .pipe(
        switchMap(
          ({ search }) => this.allCaps$
            .pipe(
              map(eventList => [...eventList].filter(item => search ? item.name.toLowerCase().includes(search.toLowerCase()) : true)),
            )
        ),
        shareReplay({
          bufferSize: 1,
          refCount: true,
        })
    );

    /**
     * List of crown caps of the current page.
     */
    this.pagesCaps$ = this.filterSettings$
      .asObservable()
      .pipe(
        switchMap(
          ({ limit, offset }) => this.filteredCaps$.pipe(map(eventList => [...eventList].slice(offset, limit)))
        ),
        shareReplay({
          bufferSize: 1,
          refCount: true,
        })
      );
  }

  getFilterSettings(): FilterSettings {
    return this.filterSettings$.getValue();
  }

  updateFilterSettings(settings: Partial<FilterSettings>) {
    const filterSettings = this.getFilterSettings();

    this.filterSettings$.next({
      ...filterSettings,
      ...settings
    })
  }

  /**
   * Increased the visible "items per page"
   */
  loadMore(): void {
    const {limit, itemsPerPage, ...filterSettings} = this.filterSettings$.getValue();
    this.filterSettings$.next({
      ...filterSettings,
      itemsPerPage,
      limit: limit + itemsPerPage
    });
  }

  nextPage(): void {
    const {limit, offset, itemsPerPage, ...filterSettings} = this.filterSettings$.getValue();
    this.filterSettings$.next({
      ...filterSettings,
      itemsPerPage,
      offset: offset + itemsPerPage,
      limit: limit + itemsPerPage
    });
  }
}
