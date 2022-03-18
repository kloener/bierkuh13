import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrownCapsListComponent } from './crown-caps-list.component';
import { CapImgModule } from '@app/shared/cap-img/cap-img.module';



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
