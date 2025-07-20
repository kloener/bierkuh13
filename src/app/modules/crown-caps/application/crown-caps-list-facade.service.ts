import { Injectable, inject } from '@angular/core';
import { QueryChange } from 'rxfire/database';
import { BehaviorSubject, combineLatest, map, Observable, of, shareReplay, switchMap } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { CrownCaps } from '../domain/crown-caps';
import { CrownCapsBuilder } from '../domain/crown-caps-builder';
import { CrownCapsDataService } from '../infrastructure/crown-caps-data.service';
import { CrownCapSnapshot } from "@app/modules/crown-caps/domain/crown-cap-snapshot";
import { CrownCapsSearchService } from './crown-caps-search.service';
import { UrlBuilderService } from '@app/shared/utils/url-builder.service';
import { 
  FilterSettings, 
  PageInfo, 
  ICrownCapsDataProvider, 
  ICrownCapsFilter, 
  ICrownCapsPagination 
} from './interfaces/crown-caps-list.interfaces';

const DEFAULT_ITEMS_PER_PAGE = 50;

/**
 * List facade that provides all, filtered and a paged caps list observable.
 */
@Injectable({
  providedIn: 'root',
})
export class CrownCapsListFacadeService implements ICrownCapsDataProvider, ICrownCapsFilter, ICrownCapsPagination {
  private readonly infraService = inject(CrownCapsDataService);
  private readonly searchService = inject(CrownCapsSearchService);
  private readonly urlBuilder = inject(UrlBuilderService);

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
  pageInfo$: Observable<PageInfo>;

  private readonly query$: Observable<QueryChange[]>;
  private readonly filterSettings$ = new BehaviorSubject<FilterSettings>({
    itemsPerPage: DEFAULT_ITEMS_PER_PAGE,
    limit: DEFAULT_ITEMS_PER_PAGE,
    offset: 0,
  });

  constructor() {
    /**
     * root of all data
     */
    this.query$ = this.infraService.query;

    /**
     * map "QueryChange" list to snaphshot and CrownCaps
     */
    this.allCaps$ = this.query$.pipe(
      map((eventList) =>
        [...eventList]
          .map((event) => ({
            identifier: event.snapshot.key, 
            snapshotJson: event.snapshot.toJSON() as CrownCapSnapshot
          }))
          .map(({identifier, snapshotJson}, idx) => 
            new CrownCapsBuilder(idx, `${identifier}`, this.urlBuilder)
              .fromDto(snapshotJson.crownCapInfo)
              .withFileInfo(snapshotJson.file)
              .withStorageRef(snapshotJson.storageRef)
              .build()
          )
          .sort((a: CrownCaps, b: CrownCaps) => a.name.localeCompare(b.name))
      ),
      shareReplay({
        bufferSize: 1,
        refCount: false,
      })
    );

    /**
     * List of crown caps that match the current "search"
     */
    this.filteredCaps$ = this.filterSettings$.asObservable().pipe(
      switchMap(({ search }) =>
        this.allCaps$.pipe(
          map((eventList) => this.searchService.filterItems(eventList, search))
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
    this.pagesCaps$ = this.filterSettings$.asObservable().pipe(
      switchMap(({ limit, offset }) =>
        this.filteredCaps$.pipe(
          map((eventList) => [...eventList].slice(offset, limit))
        )
      ),
      shareReplay({
        bufferSize: 1,
        refCount: true,
      })
    );

    this.pageInfo$ = this.filterSettings$.asObservable().pipe(
      mergeMap((settings) => combineLatest([of(settings), this.filteredCaps$])),
      map(([{ itemsPerPage, offset }, allCaps]) => ({
        currentPage: offset / itemsPerPage + 1,
        pages: Math.ceil(allCaps.length / itemsPerPage),
      }))
    );
  }

  // ICrownCapsDataProvider methods
  getAllCaps(): Observable<CrownCaps[]> {
    return this.allCaps$;
  }

  find(identifier: string | number): Observable<CrownCaps | undefined> {
    return this.allCaps$.pipe(
      map(list => list.find(item => typeof identifier === 'number' ? item.index === identifier : item.identifier === identifier)),
    );
  }

  // ICrownCapsFilter methods
  getFilteredCaps(): Observable<CrownCaps[]> {
    return this.filteredCaps$;
  }

  getFilterSettingsUpdates(): Observable<FilterSettings> {
    return this.filterSettings$.asObservable();
  }

  getFilterSettings(): FilterSettings {
    return this.filterSettings$.getValue();
  }

  updateFilterSettings(settings: Partial<FilterSettings>): void {
    const filterSettings = this.getFilterSettings();

    this.filterSettings$.next({
      ...filterSettings,
      ...settings,
    });
  }

  // ICrownCapsPagination methods
  getPagedCaps(): Observable<CrownCaps[]> {
    return this.pagesCaps$;
  }

  getPageInfo(): Observable<PageInfo> {
    return this.pageInfo$;
  }

  /**
   * Increased the visible "items per page"
   */
  loadMore(): void {
    const { limit, itemsPerPage, ...filterSettings } = this.filterSettings$.getValue();
    this.filterSettings$.next({
      ...filterSettings,
      itemsPerPage: itemsPerPage + DEFAULT_ITEMS_PER_PAGE,
      limit: limit + DEFAULT_ITEMS_PER_PAGE,
    });
  }

  setPage(pageNumber: number): void {
    const { limit, offset, itemsPerPage, ...filterSettings } =
      this.filterSettings$.getValue();
    this.filterSettings$.next({
      ...filterSettings,
      itemsPerPage,
      offset: (pageNumber - 1) * itemsPerPage,
      limit: (pageNumber - 1) * itemsPerPage + itemsPerPage,
    });
  }

  nextPage(): void {
    const { limit, offset, itemsPerPage, ...filterSettings } =
      this.filterSettings$.getValue();
    this.filterSettings$.next({
      ...filterSettings,
      itemsPerPage,
      offset: offset + itemsPerPage,
      limit: limit + itemsPerPage,
    });
  }
}
