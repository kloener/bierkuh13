import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {debounceTime, distinctUntilChanged, Subject, takeUntil} from 'rxjs';

import {CrownCapsSearchFacadeService} from '../../application/crown-caps-search-facade.service';

@Component({
  selector: 'app-crown-caps-search',
  templateUrl: './crown-caps-search.component.html',
  styleUrls: ['./crown-caps-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule]
})
export class CrownCapsSearchComponent implements OnInit, OnDestroy {
  private readonly facadeService = inject(CrownCapsSearchFacadeService);

  searchControl = new FormControl(this.facadeService.getSearch());
  formGroup: FormGroup = new FormGroup({ search: this.searchControl });

  private readonly onDestroy$ = new Subject<void>();

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(takeUntil(this.onDestroy$), distinctUntilChanged(), debounceTime(500))
      .subscribe((search) => {
        this.searchChanged(search ?? undefined);
      });

    this.facadeService.getSearchUpdates().pipe(takeUntil(this.onDestroy$)).subscribe(searchValue => {
      if (this.searchControl.value !== searchValue) {
        this.searchControl.setValue(searchValue ?? null);
      }
    })
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  searchChanged(search?: string): void {
    if (typeof search === 'string') {
      this.facadeService.search(search);
    }
  }

  resetSearch(): void {
    this.searchControl.setValue('');
  }
}
