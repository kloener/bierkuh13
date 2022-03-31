import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListPageComponent } from './admin-list-page.component';
import {AuthGuard} from "@app/core/guards/auth.guard";

const routes: Routes = [{ path: ':page', canActivate: [AuthGuard], component: AdminListPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminListPageRoutingModule { }
