import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CapImgModule } from '@app/shared/cap-img/cap-img.module';

import { CrownCapsListComponent } from './crown-caps-list.component';



@NgModule({
  declarations: [
    CrownCapsListComponent
  ],
  imports: [
    CommonModule,
    CapImgModule
  ],
  exports: [
    CrownCapsListComponent
  ]
})
export class CrownCapsListModule { }
