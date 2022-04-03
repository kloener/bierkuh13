import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerBrandsManageComponent } from './beer-brands-manage.component';



@NgModule({
  declarations: [
    BeerBrandsManageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BeerBrandsManageComponent
  ]
})
export class BeerBrandsManageModule { }
