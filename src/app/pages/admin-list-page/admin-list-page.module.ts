import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminListPageRoutingModule } from './admin-list-page-routing.module';
import { AdminListPageComponent } from './admin-list-page.component';


@NgModule({
  declarations: [
    AdminListPageComponent
  ],
  imports: [
    CommonModule,
    AdminListPageRoutingModule
  ]
})
export class AdminListPageModule { }
