import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, pluck } from 'rxjs';
import { CrownCapsDetailsComponent } from "@app/modules/crown-caps/features/crown-caps-details/crown-caps-details.component";
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, CrownCapsDetailsComponent],
})
export class DetailsPageComponent {
  private readonly route = inject(ActivatedRoute);

  identifier$: Observable<string>;

  constructor() {
    this.identifier$ = this.route.params.pipe(pluck('identifier'));
  }
}
