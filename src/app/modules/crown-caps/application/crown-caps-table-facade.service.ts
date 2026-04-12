import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { CrownCapFilesApiService } from '@app/modules/crown-cap-files/api/crown-cap-files-api.service';
import { CrownCapsListFacadeService } from '@app/modules/crown-caps/application/crown-caps-list-facade.service';
import {
  AssigneeFilter,
  CrownCapsSortField,
  SortDirection,
  filterCapsByAssignee,
  sortCapsList,
} from '@app/modules/crown-caps/application/crown-caps-admin-table.util';
import { CrownCaps } from '@app/modules/crown-caps/domain/crown-caps';
import { CrownCapsDataService } from '@app/modules/crown-caps/infrastructure/crown-caps-data.service';

export interface AdminTableUiState {
  assigneeFilter: AssigneeFilter;
  field: CrownCapsSortField;
  direction: SortDirection;
}

@Injectable({
  providedIn: 'root',
})
export class CrownCapsTableFacadeService {
  private readonly listFacadeService = inject(CrownCapsListFacadeService);
  private readonly infraService = inject(CrownCapsDataService);
  private readonly fileApi = inject(CrownCapFilesApiService);

  private readonly assigneeFilter$ = new BehaviorSubject<AssigneeFilter>('any');
  private readonly tableSort$ = new BehaviorSubject<{
    field: CrownCapsSortField;
    direction: SortDirection;
  }>({ field: 'name', direction: 'asc' });

  readonly adminTableUi$: Observable<AdminTableUiState> = combineLatest([
    this.assigneeFilter$,
    this.tableSort$,
  ]).pipe(
    map(([assigneeFilter, sort]) => ({
      assigneeFilter,
      field: sort.field,
      direction: sort.direction,
    })),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  readonly pagesCaps$: Observable<CrownCaps[]> = combineLatest([
    this.listFacadeService.filteredCaps$,
    this.listFacadeService.getFilterSettingsUpdates(),
    this.assigneeFilter$,
    this.tableSort$,
  ]).pipe(
    map(([searchFiltered, settings, assignee, sort]) => {
      let list = filterCapsByAssignee(searchFiltered, assignee);
      list = sortCapsList(list, sort.field, sort.direction);
      return list.slice(settings.offset, settings.limit);
    }),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  readonly pageInfo$: Observable<{ currentPage: number; pages: number }> = combineLatest([
    this.listFacadeService.filteredCaps$,
    this.listFacadeService.getFilterSettingsUpdates(),
    this.assigneeFilter$,
    this.tableSort$,
  ]).pipe(
    map(([searchFiltered, settings, assignee, sort]) => {
      let list = filterCapsByAssignee(searchFiltered, assignee);
      list = sortCapsList(list, sort.field, sort.direction);
      const { itemsPerPage, offset } = settings;
      const pages = Math.max(1, Math.ceil(list.length / itemsPerPage));
      const rawPage = Math.floor(offset / itemsPerPage) + 1;
      const currentPage = Math.min(Math.max(1, rawPage), pages);
      return { currentPage, pages };
    }),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  getAdminTableUi(): AdminTableUiState {
    const sort = this.tableSort$.getValue();
    return {
      assigneeFilter: this.assigneeFilter$.getValue(),
      field: sort.field,
      direction: sort.direction,
    };
  }

  setPage(pageNumber: number) {
    this.listFacadeService.setPage(pageNumber);
  }

  setTableSort(field: CrownCapsSortField): void {
    const cur = this.tableSort$.getValue();
    const sameField = cur.field === field;
    const direction = sameField
      ? cur.direction === 'asc'
        ? 'desc'
        : 'asc'
      : field === 'count'
        ? 'desc'
        : 'asc';
    this.tableSort$.next({ field, direction });
    this.listFacadeService.setPage(1);
  }

  setAssigneeFilter(filter: AssigneeFilter): void {
    this.assigneeFilter$.next(filter);
    this.listFacadeService.setPage(1);
  }

  removeCrownCap(crownCap: CrownCaps) {
    return Promise.all([
      this.infraService.removeCrownCap(crownCap.identifier),
      this.fileApi.toCrownCaps.removeFile(crownCap.storageRef),
    ]);
  }
}
