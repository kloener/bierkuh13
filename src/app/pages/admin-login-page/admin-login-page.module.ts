import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLoginPageRoutingModule } from './admin-login-page-routing.module';
import { AdminLoginPageComponent } from './admin-login-page.component';
import {LoginFormModule} from "@app/modules/user/features/login-form/login-form.module";


@NgModule({
  declarations: [
    AdminLoginPageComponent
  ],
  imports: [
    CommonModule,
    AdminLoginPageRoutingModule,
    LoginFormModule
  ]
})
export class AdminLoginPageModule { }
