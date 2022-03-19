import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CrownCapsCountFacadeService } from '../../application/crown-caps-count-facade.service';

@Component({
  selector: 'app-crown-caps-count',
  templateUrl: './crown-caps-count.component.html',
  styleUrls: ['./crown-caps-count.component.scss']
})
export class CrownCapsCountComponent implements OnInit {

  filterCount$: Observable<number>;
  overallCount$: Observable<number>;

  constructor(private readonly facadeService: CrownCapsCountFacadeService) {
    this.filterCount$ = this.facadeService.filterCount$;
    this.overallCount$ = this.facadeService.overallCount$;
  }

  ngOnInit(): void {
  }

}
