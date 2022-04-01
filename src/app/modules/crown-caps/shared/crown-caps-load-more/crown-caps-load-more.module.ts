import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IntersectionModule } from '../../../../shared/intersection/intersection.module';
import { CrownCapsLoadMoreComponent } from './crown-caps-load-more.component';

@NgModule({
  declarations: [CrownCapsLoadMoreComponent],
  exports: [CrownCapsLoadMoreComponent],
  imports: [CommonModule, IntersectionModule],
})
export class CrownCapsLoadMoreModule {}
