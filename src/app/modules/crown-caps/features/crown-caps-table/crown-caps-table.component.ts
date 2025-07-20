import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output, inject } from '@angular/core';
import {BehaviorSubject, Observable, Subject, takeUntil} from "rxjs";
import {CrownCaps} from "@app/modules/crown-caps/domain/crown-caps";
import {CrownCapsTableFacadeService} from "@app/modules/crown-caps/application/crown-caps-table-facade.service";
import { CrownCapsPaginationComponent } from '../../shared/crown-caps-pagination/crown-caps-pagination.component';
import { CapImgComponent } from '../../../../shared/cap-img/cap-img.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-crown-caps-table',
  templateUrl: './crown-caps-table.component.html',
  styleUrls: ['./crown-caps-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, CrownCapsPaginationComponent, CapImgComponent]
})
export class CrownCapsTableComponent implements OnInit, OnDestroy {
  private readonly tableFacadeService = inject(CrownCapsTableFacadeService);

  // TODO: Skipped for migration because:
  //  Accessor inputs cannot be migrated as they are too complex.
  @Input()
  set page(pageVal: string | undefined | null) {
    if (pageVal) {
      this.pageSubject.next(parseInt(pageVal, 10));
    }
  }

  @Output()
  nextPage = new EventEmitter<number>();

  @Output()
  editCap = new EventEmitter<CrownCaps>();
  @Output()
  deleteCap = new EventEmitter<CrownCaps>();
  @Output()
  clickCap = new EventEmitter<CrownCaps>();

  caps$: Observable<CrownCaps[]>;
  pageInfo$: Observable<{ currentPage: number; pages: number }>;

  private readonly pageSubject = new BehaviorSubject<number>(1);
  private readonly destroy$ = new Subject<void>();

  constructor() {
    this.caps$ = this.tableFacadeService.pagesCaps$;
    this.pageInfo$ = this.tableFacadeService.pageInfo$;
  }

  ngOnInit(): void {
    this.pageSubject
      .pipe(takeUntil(this.destroy$))
      .subscribe((page) => this.tableFacadeService.setPage(page));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadPreviousPage(): void {
    this.nextPage.emit(this.pageSubject.getValue() - 1);
  }

  loadNextPage(): void {
    this.nextPage.emit(this.pageSubject.getValue() + 1);
  }

  onEditClick(item: CrownCaps) {
    this.editCap.next(item);
  }

  onDeleteClick(item: CrownCaps) {
    if (confirm(`"${item.name}" wirklich löschen?`)) {
      this.deleteCap.next(item);
      this.tableFacadeService.removeCrownCap(item);
    }
  }

  onCapClick(item: CrownCaps) {
    this.clickCap.next(item);
  }
}
