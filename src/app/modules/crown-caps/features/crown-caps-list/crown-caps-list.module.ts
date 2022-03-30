import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CapImgModule } from '@app/shared/cap-img/cap-img.module';

import { CrownCapsListComponent } from './crown-caps-list.component';
import {
  CrownCapsPaginationModule
} from "@app/modules/crown-caps/features/crown-caps-pagination/crown-caps-pagination.module";

@NgModule({
  declarations: [
    CrownCapsListComponent
  ],
  imports: [
    CommonModule,
    CapImgModule,
    CrownCapsPaginationModule
  ],
  exports: [
    CrownCapsListComponent
  ]
})
export class CrownCapsListModule { }
