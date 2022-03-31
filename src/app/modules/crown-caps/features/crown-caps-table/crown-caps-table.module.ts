import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrownCapsTableComponent } from './crown-caps-table.component';
import {
  CrownCapsPaginationModule
} from "@app/modules/crown-caps/features/crown-caps-pagination/crown-caps-pagination.module";
import {CapImgModule} from "@app/shared/cap-img/cap-img.module";



@NgModule({
  declarations: [
    CrownCapsTableComponent
  ],
  exports: [
    CrownCapsTableComponent
  ],
  imports: [
    CommonModule,
    CrownCapsPaginationModule,
    CapImgModule
  ]
})
export class CrownCapsTableModule { }
