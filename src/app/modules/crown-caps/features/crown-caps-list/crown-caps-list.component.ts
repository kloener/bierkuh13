import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {BehaviorSubject, Observable, Subject, takeUntil} from 'rxjs';

import {CrownCapsListFacadeService} from '../../application/crown-caps-list-facade.service';
import {CrownCaps} from '../../domain/crown-caps';

@Component({
  selector: 'app-crown-caps-list',
  templateUrl: './crown-caps-list.component.html',
  styleUrls: ['./crown-caps-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrownCapsListComponent implements OnInit, OnDestroy {
  @Input()
  set page(pageVal: string | undefined | null) {
    if (pageVal) {
      this.pageSubject.next(parseInt(pageVal, 10));
    }
  }

  @Output()
  capClicked = new EventEmitter<CrownCaps>();

  caps$: Observable<CrownCaps[]>;
  pageInfo$: Observable<{ currentPage: number; pages: number }>;

  private readonly pageSubject = new BehaviorSubject<number>(1);
  private readonly destroy$ = new Subject<void>();

  constructor(private readonly facadeService: CrownCapsListFacadeService) {
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
    this.capClicked.next(item);
  }
}
