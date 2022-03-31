import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListPageComponent } from './admin-list-page.component';

const routes: Routes = [{ path: ':page', component: AdminListPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminListPageRoutingModule { }
