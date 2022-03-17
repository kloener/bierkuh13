import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUpsertPageComponent } from './admin-upsert-page.component';

const routes: Routes = [{ path: '', component: AdminUpsertPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminUpsertPageRoutingModule { }
