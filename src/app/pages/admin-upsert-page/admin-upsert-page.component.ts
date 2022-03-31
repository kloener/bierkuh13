import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {Observable, pluck} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin-upsert-page',
  templateUrl: './admin-upsert-page.component.html',
  styleUrls: ['./admin-upsert-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminUpsertPageComponent implements OnInit {
  identifier$: Observable<string>;

  constructor(private readonly route: ActivatedRoute) {
    this.identifier$ = this.route.params.pipe(pluck('identifier'));
  }

  ngOnInit(): void {
  }

}
