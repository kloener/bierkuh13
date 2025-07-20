import { AdminListPageComponent } from './admin-list-page.component';
import { AuthGuard } from '@app/core/guards/auth.guard';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: ':page', canActivate: [AuthGuard], component: AdminListPageComponent },
  { path: '', redirectTo: '1', pathMatch: 'full' }
];
