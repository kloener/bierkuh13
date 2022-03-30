import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrownCapsLoadMoreComponent } from './crown-caps-load-more.component';



@NgModule({
  declarations: [
    CrownCapsLoadMoreComponent
  ],
  exports: [
    CrownCapsLoadMoreComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CrownCapsLoadMoreModule { }
