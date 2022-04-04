import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBeerBrandsPageComponent } from './admin-beer-brands-page.component';

const routes: Routes = [{ path: '', component: AdminBeerBrandsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminBeerBrandsPageRoutingModule { }
