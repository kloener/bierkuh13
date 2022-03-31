import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, pluck, tap} from 'rxjs';
import {CrownCaps} from "@app/modules/crown-caps/domain/crown-caps";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
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
