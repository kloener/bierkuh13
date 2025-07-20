import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import {AsyncPipe} from "@angular/common";
import { Observable } from 'rxjs';

import { CrownCapsCountFacadeService } from '../../application/crown-caps-count-facade.service';

@Component({
  selector: 'app-crown-caps-count',
  templateUrl: './crown-caps-count.component.html',
  styleUrls: ['./crown-caps-count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe]
})
export class CrownCapsCountComponent implements OnInit {
  private readonly facadeService = inject(CrownCapsCountFacadeService);


  filterCount$: Observable<number>;
  overallCount$: Observable<number>;

  constructor() {
    this.filterCount$ = this.facadeService.filterCount$;
    this.overallCount$ = this.facadeService.overallCount$;
  }

  ngOnInit(): void {
  }

}
