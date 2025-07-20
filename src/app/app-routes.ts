import { routes } from './pages/admin-beer-brands-page/admin-beer-brands-page.routes';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home-page/home-page.routes').then(m => m.routes),
  },
  {
    path: 'admin-list',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/admin-list-page/admin-list.routes').then(m => m.routes),
  },
  {
    path: 'admin-upsert',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./pages/admin-upsert-page/admin-upsert-page.routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'details',
    loadChildren: () =>
      import('./pages/details-page/details-page.routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'admin-login',
    loadChildren: () =>
      import('./pages/admin-login-page/admin-login-page.routes').then(
        (m) => m.routes
      ),
  },
  { path: 'admin-beer-brands', loadChildren: () => import('./pages/admin-beer-brands-page/admin-beer-brands-page.routes').then(m => m.routes) },
];

