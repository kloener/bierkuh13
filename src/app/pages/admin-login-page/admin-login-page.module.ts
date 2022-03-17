import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLoginPageRoutingModule } from './admin-login-page-routing.module';
import { AdminLoginPageComponent } from './admin-login-page.component';


@NgModule({
  declarations: [
    AdminLoginPageComponent
  ],
  imports: [
    CommonModule,
    AdminLoginPageRoutingModule
  ]
})
export class AdminLoginPageModule { }
