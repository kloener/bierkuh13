import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginPageComponent } from './admin-login-page.component';

export const routes: Routes = [{ path: '', canActivate: [], component: AdminLoginPageComponent }];
