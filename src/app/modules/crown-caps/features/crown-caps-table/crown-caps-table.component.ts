import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  effect,
  inject,
  output,
  signal,
  viewChild,
  viewChildren,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';

import { CrownCaps } from '@app/modules/crown-caps/domain/crown-caps';
import { CrownCapsTableFacadeService } from '@app/modules/crown-caps/application/crown-caps-table-facade.service';
import { CrownCapsPaginationComponent } from '../../shared/crown-caps-pagination/crown-caps-pagination.component';
import { CapImgComponent } from '../../../../shared/cap-img/cap-img.component';
import {
  estimateItemsPerRow,
  isCapNavKey,
  nextCapNavIndex,
} from '../../../../shared/cap-keyboard-nav/cap-keyboard-nav';

@Component({
  selector: 'app-crown-caps-table',
  templateUrl: './crown-caps-table.component.html',
  styleUrls: ['./crown-caps-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, CrownCapsPaginationComponent, CapImgComponent],
})
export class CrownCapsTableComponent implements OnInit, OnDestroy {
  private readonly tableFacadeService = inject(CrownCapsTableFacadeService);

  @Input()
  set page(pageVal: string | undefined | null) {
    if (pageVal) {
      this.pageSubject.next(parseInt(pageVal, 10));
      this.focusedCapIndex.set(0);
    }
  }

  readonly nextPage = output<number>();
  readonly editCap = output<CrownCaps>();
  readonly deleteCap = output<CrownCaps>();
  readonly clickCap = output<CrownCaps>();

  caps$: Observable<CrownCaps[]>;
  pageInfo$: Observable<{ currentPage: number; pages: number }>;

  readonly caps = toSignal(this.tableFacadeService.pagesCaps$, { initialValue: [] as CrownCaps[] });

  readonly tableNavRoot = viewChild<ElementRef<HTMLElement>>('tableNavRoot');
  readonly capNavEls = viewChildren<ElementRef<HTMLElement>>('capNav');

  readonly focusedCapIndex = signal(0);

  private readonly pageSubject = new BehaviorSubject<number>(1);
  private readonly destroy$ = new Subject<void>();

  constructor() {
    this.caps$ = this.tableFacadeService.pagesCaps$;
    this.pageInfo$ = this.tableFacadeService.pageInfo$;

    effect(() => {
      const list = this.caps();
      const i = this.focusedCapIndex();
      if (list.length === 0) {
        this.focusedCapIndex.set(0);
        return;
      }
      if (i >= list.length) {
        this.focusedCapIndex.set(list.length - 1);
      }
    });
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
    this.editCap.emit(item);
  }

  onDeleteClick(item: CrownCaps) {
    if (confirm(`"${item.name}" wirklich löschen?`)) {
      this.deleteCap.emit(item);
      this.tableFacadeService.removeCrownCap(item);
    }
  }

  onCapClick(item: CrownCaps) {
    this.clickCap.emit(item);
  }

  onCapFocusIn(index: number): void {
    this.focusedCapIndex.set(index);
  }

  onTableKeydown(event: KeyboardEvent): void {
    if (!isCapNavKey(event.key) || event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }
    const itemEl = target.closest('[data-cap-nav-item]');
    const root = this.tableNavRoot()?.nativeElement;
    if (!itemEl || !root?.contains(itemEl)) {
      return;
    }
    const idxAttr = itemEl.getAttribute('data-cap-nav-index');
    if (idxAttr === null) {
      return;
    }
    const current = parseInt(idxAttr, 10);
    if (Number.isNaN(current)) {
      return;
    }
    const refs = this.capNavEls();
    const elements = refs.map((r) => r.nativeElement);
    if (elements.length === 0) {
      return;
    }
    const cols = estimateItemsPerRow(elements);
    const next = nextCapNavIndex(current, elements.length, event.key, cols);
    if (next === null) {
      return;
    }
    event.preventDefault();
    this.focusedCapIndex.set(next);
    queueMicrotask(() => {
      const el = elements[next];
      el?.focus();
      el?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    });
  }

  onCapCellActivateKeydown(event: KeyboardEvent, item: CrownCaps): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.onCapClick(item);
    }
  }
}
