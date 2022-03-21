import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, pluck } from 'rxjs';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsPageComponent {
  identifier$: Observable<string>;

  constructor(private readonly route: ActivatedRoute) {
    this.identifier$ = this.route.params.pipe(pluck('identifier'));
  }
}
