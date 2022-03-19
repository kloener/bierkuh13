import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-upsert-page',
  templateUrl: './admin-upsert-page.component.html',
  styleUrls: ['./admin-upsert-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminUpsertPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
