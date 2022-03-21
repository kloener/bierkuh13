import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home/1' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'admin-list',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./pages/admin-list-page/admin-list-page.module').then(
        (m) => m.AdminListPageModule
      ),
  },
  {
    path: 'admin-upsert',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./pages/admin-upsert-page/admin-upsert-page.module').then(
        (m) => m.AdminUpsertPageModule
      ),
  },
  {
    path: 'details',
    loadChildren: () =>
      import('./pages/details-page/details-page.module').then(
        (m) => m.DetailsPageModule
      ),
  },
  {
    path: 'admin-login',
    loadChildren: () =>
      import('./pages/admin-login-page/admin-login-page.module').then(
        (m) => m.AdminLoginPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
