import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BehaviorSubject, filter, mergeMap, Observable } from 'rxjs';

import { CrownCapsDetailsFacadeService } from '../../application/crown-caps-details-facade.service';
import { CrownCaps } from '../../domain/crown-caps';
import { CapImgComponent } from '../../../../shared/cap-img/cap-img.component';
import { AssigneePipe } from '../../../../shared/assignee/assignee.pipe';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-crown-caps-details',
  templateUrl: './crown-caps-details.component.html',
  styleUrls: ['./crown-caps-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, RouterLink, CapImgComponent, AssigneePipe],
})
export class CrownCapsDetailsComponent implements OnInit {
  private readonly facadeService = inject(CrownCapsDetailsFacadeService);

  details$: Observable<CrownCaps | undefined>;

  // TODO: Skipped for migration because:
  //  Accessor inputs cannot be migrated as they are too complex.
  @Input() set identifier(val: string | null | undefined) {
    if (typeof val === 'string') {
      this.identifier$.next(val);
    }
  }

  private readonly identifier$ = new BehaviorSubject<string>('');

  constructor() {
    this.details$ = this.identifier$.pipe(
      filter((identifier) => Boolean(identifier)),
      mergeMap((identifier) => this.facadeService.getDetailsOf(identifier))
    );
  }

  ngOnInit(): void {}
}
