import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  CrownCapsPaginationModule,
} from '@app/modules/crown-caps/shared/crown-caps-pagination/crown-caps-pagination.module';
import { CapImgModule } from '@app/shared/cap-img/cap-img.module';

import { CrownCapsTableComponent } from './crown-caps-table.component';

@NgModule({
  declarations: [CrownCapsTableComponent],
  exports: [CrownCapsTableComponent],
  imports: [CommonModule, CrownCapsPaginationModule, CapImgModule],
})
export class CrownCapsTableModule {}
