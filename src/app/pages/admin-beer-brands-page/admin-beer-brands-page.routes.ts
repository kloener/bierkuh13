import { AuthGuard } from '@app/core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [{ path: '', canActivate: [AuthGuard], loadComponent: () => import('./admin-beer-brands-page.component').then(m => m.AdminBeerBrandsPageComponent) }];
