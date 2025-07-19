import { Observable } from 'rxjs';
import { CrownCaps } from '../../domain/crown-caps';

export interface FilterSettings {
  limit: number;
  offset: number;
  itemsPerPage: number;
  search?: string;
}

export interface PageInfo {
  currentPage: number;
  pages: number;
}

export interface ICrownCapsDataProvider {
  getAllCaps(): Observable<CrownCaps[]>;
  find(identifier: string | number): Observable<CrownCaps | undefined>;
}

export interface ICrownCapsFilter {
  getFilteredCaps(): Observable<CrownCaps[]>;
  getFilterSettings(): FilterSettings;
  getFilterSettingsUpdates(): Observable<FilterSettings>;
  updateFilterSettings(settings: Partial<FilterSettings>): void;
}

export interface ICrownCapsPagination {
  getPagedCaps(): Observable<CrownCaps[]>;
  getPageInfo(): Observable<PageInfo>;
  loadMore(): void;
  setPage(pageNumber: number): void;
  nextPage(): void;
}