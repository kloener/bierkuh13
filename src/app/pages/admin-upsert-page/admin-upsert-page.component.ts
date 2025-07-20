import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import {Observable, pluck} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import { CrownCapsUpdateFormComponent } from "@app/modules/crown-caps/features/crown-caps-update-form/crown-caps-update-form.component";
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-admin-upsert-page',
  templateUrl: './admin-upsert-page.component.html',
  styleUrls: ['./admin-upsert-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, CrownCapsUpdateFormComponent]
})
export class AdminUpsertPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  identifier$: Observable<string>;

  constructor() {
    this.identifier$ = this.route.params.pipe(pluck('identifier'));
  }

  ngOnInit(): void {
  }

}
