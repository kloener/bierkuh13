import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerBrandsFilterComponent } from './beer-brands-filter.component';



@NgModule({
  declarations: [
    BeerBrandsFilterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BeerBrandsFilterComponent
  ]
})
export class BeerBrandsFilterModule { }
