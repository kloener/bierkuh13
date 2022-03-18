import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BierkuhHeaderComponent } from './bierkuh-header.component';



@NgModule({
  declarations: [
    BierkuhHeaderComponent
  ],
  imports: [
    CommonModule, RouterModule,
  ],
  exports: [
    BierkuhHeaderComponent
  ]
})
export class BierkuhHeaderModule { }
