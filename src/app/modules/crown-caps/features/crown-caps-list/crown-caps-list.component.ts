import { Component, OnInit } from '@angular/core';
import { CrownCapsListFacadeService } from './crown-caps-list-facade.service';

@Component({
  selector: 'app-crown-caps-list',
  templateUrl: './crown-caps-list.component.html',
  styleUrls: ['./crown-caps-list.component.scss']
})
export class CrownCapsListComponent implements OnInit {

  constructor(private readonly facadeService: CrownCapsListFacadeService) { }

  ngOnInit(): void {
  }

}
