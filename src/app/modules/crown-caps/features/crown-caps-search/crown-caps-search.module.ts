import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CrownCapsSearchComponent } from './crown-caps-search.component';



@NgModule({
  declarations: [
    CrownCapsSearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CrownCapsSearchComponent
  ]
})
export class CrownCapsSearchModule { }
