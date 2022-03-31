import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {Observable, pluck, tap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-admin-list-page',
  templateUrl: './admin-list-page.component.html',
  styleUrls: ['./admin-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminListPageComponent implements OnInit {
  page$: Observable<string>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    this.page$ = this.route.params.pipe(
      pluck('page'),
      tap((page) => this.handleRoutePage(page))
    );
  }

  onNextPage(nextPage: number) {
    return this.router.navigate(['..', nextPage], { relativeTo: this.route });
  }

  navigateToDetails(idx: number) {
    return this.router.navigate(['/', 'admin-upsert', idx])
  }

  ngOnInit(): void {}

  private handleRoutePage(page: string): void {
    if (!page || +page <= 0) {
      this.onNextPage(1);
    }
  }

}
