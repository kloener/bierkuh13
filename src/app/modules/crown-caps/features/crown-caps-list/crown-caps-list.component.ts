import { Component, OnInit } from '@angular/core';
import { CrownCapsListFacadeService } from './crown-caps-list-facade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crown-caps-list',
  templateUrl: './crown-caps-list.component.html',
  styleUrls: ['./crown-caps-list.component.scss']
})
export class CrownCapsListComponent implements OnInit {
  caps$: Observable<any>;

  constructor(private readonly facadeService: CrownCapsListFacadeService) {
    this.caps$ = this.facadeService.caps$;
  }

  ngOnInit(): void {
  }

}
