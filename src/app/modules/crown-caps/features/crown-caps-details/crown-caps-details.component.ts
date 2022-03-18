import { Component, OnInit } from '@angular/core';
import { CrownCapsDetailsFacadeService } from './crown-caps-details-facade.service';

@Component({
  selector: 'app-crown-caps-details',
  templateUrl: './crown-caps-details.component.html',
  styleUrls: ['./crown-caps-details.component.scss']
})
export class CrownCapsDetailsComponent implements OnInit {

  constructor(private readonly facadeService: CrownCapsDetailsFacadeService) { }

  ngOnInit(): void {
  }

}
