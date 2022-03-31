import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminUpsertPageRoutingModule } from './admin-upsert-page-routing.module';
import { AdminUpsertPageComponent } from './admin-upsert-page.component';
import {CrownCapsDetailsModule} from "@app/modules/crown-caps/features/crown-caps-details/crown-caps-details.module";
import {
  CrownCapsUpdateFormModule
} from "@app/modules/crown-caps/features/crown-caps-update-form/crown-caps-update-form.module";


@NgModule({
  declarations: [
    AdminUpsertPageComponent
  ],
  imports: [
    CommonModule,
    AdminUpsertPageRoutingModule,
    CrownCapsDetailsModule,
    CrownCapsUpdateFormModule
  ]
})
export class AdminUpsertPageModule { }
