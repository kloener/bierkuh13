import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CrownCapsLoadMoreModule } from '@app/modules/crown-caps/shared/crown-caps-load-more/crown-caps-load-more.module';
import { CapImgModule } from '@app/shared/cap-img/cap-img.module';

import { CrownCapsListComponent } from './crown-caps-list.component';

@NgModule({
  declarations: [CrownCapsListComponent],
  imports: [CommonModule, CapImgModule, CrownCapsLoadMoreModule],
  exports: [CrownCapsListComponent],
})
export class CrownCapsListModule {}
