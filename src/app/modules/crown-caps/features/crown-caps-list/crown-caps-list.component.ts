import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { CrownCapsListFacadeService } from '../../application/crown-caps-list-facade.service';
import { CrownCaps } from '../../domain/crown-caps';

@Component({
  selector: 'app-crown-caps-list',
  templateUrl: './crown-caps-list.component.html',
  styleUrls: ['./crown-caps-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrownCapsListComponent {
  caps$: Observable<CrownCaps[]>;

  constructor(private readonly facadeService: CrownCapsListFacadeService) {
    this.caps$ = this.facadeService.pagesCaps$;
  }

  loadMore(): void {
    this.facadeService.loadMore();
  }

}
