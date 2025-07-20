import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, pluck, tap} from 'rxjs';
import {CrownCaps} from "@app/modules/crown-caps/domain/crown-caps";
import { CrownCapsSearchComponent } from "@app/modules/crown-caps/features/crown-caps-search/crown-caps-search.component";
import { BeerBrandsFilterComponent } from "@app/modules/beer-brands/features/beer-brands-filter/beer-brands-filter.component";
import { CrownCapsCountComponent } from "@app/modules/crown-caps/features/crown-caps-count/crown-caps-count.component";
import { CrownCapsListComponent } from "@app/modules/crown-caps/features/crown-caps-list/crown-caps-list.component";
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, CrownCapsSearchComponent, BeerBrandsFilterComponent, CrownCapsCountComponent, CrownCapsListComponent],
})
export class HomePageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  page$: Observable<string>;

  constructor() {
    this.page$ = this.route.params.pipe(
      pluck('page'),
      tap((page) => this.handleRoutePage(page))
    );
  }

  onNextPage(nextPage: number): void {
    this.router.navigate(['..', nextPage], { relativeTo: this.route });
  }

  navigateToDetails(cap: CrownCaps) {
    return this.router.navigate(['/', 'details', cap.identifier]);
  }

  ngOnInit(): void {}

  private handleRoutePage(page: string): void {
    if (!page || +page <= 0) {
      this.onNextPage(1);
    }
  }
}
