
import { AuthGuard } from '@app/core/guards/auth.guard';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: ':page', canActivate: [AuthGuard], loadComponent: () => import('./admin-list-page.component').then(m => m.AdminListPageComponent) },
  { path: '', redirectTo: '1', pathMatch: 'full' }
];
