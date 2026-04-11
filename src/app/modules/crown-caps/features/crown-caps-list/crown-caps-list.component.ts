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

import { CrownCapsListFacadeService } from '../../application/crown-caps-list-facade.service';
import { CrownCaps } from '../../domain/crown-caps';
import { CrownCapsLoadMoreComponent } from '../../shared/crown-caps-load-more/crown-caps-load-more.component';
import { CapImgComponent } from '../../../../shared/cap-img/cap-img.component';
import {
  estimateItemsPerRow,
  isCapNavKey,
  nextCapNavIndex,
} from '../../../../shared/cap-keyboard-nav/cap-keyboard-nav';

@Component({
  selector: 'app-crown-caps-list',
  templateUrl: './crown-caps-list.component.html',
  styleUrls: ['./crown-caps-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CrownCapsLoadMoreComponent, CapImgComponent],
})
export class CrownCapsListComponent implements OnInit, OnDestroy {
  private readonly facadeService = inject(CrownCapsListFacadeService);

  // TODO: Skipped for migration because:
  //  Accessor inputs cannot be migrated as they are too complex.
  @Input()
  set page(pageVal: string | undefined | null) {
    if (pageVal) {
      this.pageSubject.next(parseInt(pageVal, 10));
      this.focusedCapIndex.set(0);
    }
  }

  readonly capClicked = output<CrownCaps>();

  caps$: Observable<CrownCaps[]>;
  pageInfo$: Observable<{ currentPage: number; pages: number }>;

  readonly caps = toSignal(this.facadeService.pagesCaps$, { initialValue: [] as CrownCaps[] });

  readonly listSection = viewChild<ElementRef<HTMLElement>>('listSection');
  readonly capNavEls = viewChildren<ElementRef<HTMLElement>>('capNav');

  readonly focusedCapIndex = signal(0);

  private readonly pageSubject = new BehaviorSubject<number>(1);
  private readonly destroy$ = new Subject<void>();

  constructor() {
    this.caps$ = this.facadeService.pagesCaps$;
    this.pageInfo$ = this.facadeService.pageInfo$;

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
      .subscribe((page) => this.facadeService.setPage(page));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadMore() {
    this.facadeService.loadMore();
  }

  onCapClick(item: CrownCaps) {
    this.capClicked.emit(item);
  }

  onCapFocusIn(index: number): void {
    this.focusedCapIndex.set(index);
  }

  onListKeydown(event: KeyboardEvent): void {
    if (!isCapNavKey(event.key) || event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }
    const itemEl = target.closest('[data-cap-nav-item]');
    const section = this.listSection()?.nativeElement;
    if (!itemEl || !section?.contains(itemEl)) {
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

  onCapActivateKeydown(event: KeyboardEvent, item: CrownCaps): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.onCapClick(item);
    }
  }
}
