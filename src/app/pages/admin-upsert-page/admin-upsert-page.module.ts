import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminUpsertPageRoutingModule } from './admin-upsert-page-routing.module';
import { AdminUpsertPageComponent } from './admin-upsert-page.component';


@NgModule({
  declarations: [
    AdminUpsertPageComponent
  ],
  imports: [
    CommonModule,
    AdminUpsertPageRoutingModule
  ]
})
export class AdminUpsertPageModule { }
