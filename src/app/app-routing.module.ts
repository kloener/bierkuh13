import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'admin-list', loadChildren: () => import('./pages/admin-list-page/admin-list-page.module').then(m => m.AdminListPageModule) },
  { path: 'admin-upsert', loadChildren: () => import('./pages/admin-upsert-page/admin-upsert-page.module').then(m => m.AdminUpsertPageModule) },
  { path: 'details', loadChildren: () => import('./pages/details-page/details-page.module').then(m => m.DetailsPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
