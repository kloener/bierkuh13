import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-list-page',
  templateUrl: './admin-list-page.component.html',
  styleUrls: ['./admin-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminListPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
