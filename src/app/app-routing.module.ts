import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home/1' },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
  },
  {
    path: 'admin-list',
    canLoad: [AuthGuard],
    loadComponent: () =>
      import('./pages/admin-list-page/admin-list-page.component').then(
        (m) => m.AdminListPageComponent
      ),
  },
  {
    path: 'admin-upsert',
    canLoad: [AuthGuard],
    loadComponent: () =>
      import('./pages/admin-upsert-page/admin-upsert-page.component').then(
        (m) => m.AdminUpsertPageComponent
      ),
  },
  {
    path: 'details',
    loadComponent: () =>
      import('./pages/details-page/details-page.component').then(
        (m) => m.DetailsPageComponent
      ),
  },
  {
    path: 'admin-login',
    loadComponent: () =>
      import('./pages/admin-login-page/admin-login-page.component').then(
        (m) => m.AdminLoginPageComponent
      ),
  },
  { path: 'admin-beer-brands', loadComponent: () => import('./pages/admin-beer-brands-page/admin-beer-brands-page.component').then(m => m.AdminBeerBrandsPageComponent) },
];

