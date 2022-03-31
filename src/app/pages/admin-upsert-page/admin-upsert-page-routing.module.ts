import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUpsertPageComponent } from './admin-upsert-page.component';
import {AuthGuard} from "@app/core/guards/auth.guard";

const routes: Routes = [{ path: ':identifier', canActivate: [AuthGuard], component: AdminUpsertPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminUpsertPageRoutingModule { }
