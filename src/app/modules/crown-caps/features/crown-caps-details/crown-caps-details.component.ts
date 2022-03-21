import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, filter, mergeMap, Observable } from 'rxjs';

import { CrownCapsDetailsFacadeService } from '../../application/crown-caps-details-facade.service';
import { CrownCaps } from '../../domain/crown-caps';

@Component({
  selector: 'app-crown-caps-details',
  templateUrl: './crown-caps-details.component.html',
  styleUrls: ['./crown-caps-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrownCapsDetailsComponent implements OnInit {
  details$: Observable<CrownCaps | undefined>;

  @Input() set identifier(val: string | null | undefined) {
    if (typeof val === 'string') {
      this.identifier$.next(val);
    }
  }

  private readonly identifier$ = new BehaviorSubject<string>('');

  constructor(private readonly facadeService: CrownCapsDetailsFacadeService) {
    this.details$ = this.identifier$.pipe(
      filter((identifier) => Boolean(identifier)),
      mergeMap((identifier) => this.facadeService.getDetailsOf(identifier))
    );
  }

  ngOnInit(): void {}
}
