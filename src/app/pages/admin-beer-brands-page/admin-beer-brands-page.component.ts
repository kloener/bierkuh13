import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-beer-brands-page',
  templateUrl: './admin-beer-brands-page.component.html',
  styleUrls: ['./admin-beer-brands-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminBeerBrandsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
