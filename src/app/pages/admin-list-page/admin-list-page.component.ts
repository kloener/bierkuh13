import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import {Observable, pluck, tap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {CrownCaps} from "@app/modules/crown-caps/domain/crown-caps";
import { LoggedInAsInfoComponent } from "@app/modules/user/features/logged-in-as-info/logged-in-as-info.component";
import { CrownCapUploadFilesInputComponent } from "@app/modules/crown-caps/features/crown-cap-upload-files-input/crown-cap-upload-files-input.component";
import { CrownCapsSearchComponent } from "@app/modules/crown-caps/features/crown-caps-search/crown-caps-search.component";
import { BeerBrandsFilterComponent } from "@app/modules/beer-brands/features/beer-brands-filter/beer-brands-filter.component";
import { CrownCapsCountComponent } from "@app/modules/crown-caps/features/crown-caps-count/crown-caps-count.component";
import { CrownCapsTableComponent } from "@app/modules/crown-caps/features/crown-caps-table/crown-caps-table.component";
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-admin-list-page',
  templateUrl: './admin-list-page.component.html',
  styleUrls: ['./admin-list-page.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, LoggedInAsInfoComponent, CrownCapUploadFilesInputComponent, CrownCapsSearchComponent, BeerBrandsFilterComponent, CrownCapsCountComponent, CrownCapsTableComponent]
})
export class AdminListPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  page$: Observable<string>;

  constructor() {
    this.page$ = this.route.params.pipe(
      pluck('page'),
      tap((page) => this.handleRoutePage(page))
    );
  }

  onNextPage(nextPage: number) {
    return this.router.navigate(['..', nextPage], { relativeTo: this.route });
  }

  navigateToDetails(cap: CrownCaps) {
    return this.router.navigate(['/', 'admin-upsert', cap.identifier])
  }

  ngOnInit(): void {}

  private handleRoutePage(page: string): void {
    if (!page || +page <= 0) {
      this.onNextPage(1);
    }
  }
}
