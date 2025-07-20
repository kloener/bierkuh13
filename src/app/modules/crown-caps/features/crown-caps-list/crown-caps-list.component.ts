import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, inject, output } from '@angular/core';
import {BehaviorSubject, Observable, Subject, takeUntil} from 'rxjs';

import {CrownCapsListFacadeService} from '../../application/crown-caps-list-facade.service';
import {CrownCaps} from '../../domain/crown-caps';
import { CrownCapsPaginationComponent } from '../../shared/crown-caps-pagination/crown-caps-pagination.component';
import { CrownCapsLoadMoreComponent } from '../../shared/crown-caps-load-more/crown-caps-load-more.component';
import { CapImgComponent } from '../../../../shared/cap-img/cap-img.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-crown-caps-list',
  templateUrl: './crown-caps-list.component.html',
  styleUrls: ['./crown-caps-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, CrownCapsLoadMoreComponent, CapImgComponent],
})
export class CrownCapsListComponent implements OnInit, OnDestroy {
  private readonly facadeService = inject(CrownCapsListFacadeService);

  // TODO: Skipped for migration because:
  //  Accessor inputs cannot be migrated as they are too complex.
  @Input()
  set page(pageVal: string | undefined | null) {
    if (pageVal) {
      this.pageSubject.next(parseInt(pageVal, 10));
    }
  }

  readonly capClicked = output<CrownCaps>();

  caps$: Observable<CrownCaps[]>;
  pageInfo$: Observable<{ currentPage: number; pages: number }>;

  private readonly pageSubject = new BehaviorSubject<number>(1);
  private readonly destroy$ = new Subject<void>();

  constructor() {
    this.caps$ = this.facadeService.pagesCaps$;
    this.pageInfo$ = this.facadeService.pageInfo$;
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
}
