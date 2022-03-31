import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CapImgModule} from '@app/shared/cap-img/cap-img.module';

import {CrownCapsListComponent} from './crown-caps-list.component';
import {
  CrownCapsLoadMoreModule
} from "@app/modules/crown-caps/features/crown-caps-load-more/crown-caps-load-more.module";

@NgModule({
  declarations: [
    CrownCapsListComponent
  ],
  imports: [
    CommonModule,
    CapImgModule,
    CrownCapsLoadMoreModule,
  ],
  exports: [
    CrownCapsListComponent
  ]
})
export class CrownCapsListModule { }
