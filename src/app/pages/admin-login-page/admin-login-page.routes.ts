import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [{ path: '', canActivate: [], loadComponent: () => import('./admin-login-page.component').then(m => m.AdminLoginPageComponent) }];
