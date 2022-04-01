import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IntersectionModule } from '../intersection/intersection.module';
import { CapImgComponent } from './cap-img.component';

@NgModule({
  declarations: [CapImgComponent],
  imports: [CommonModule, IntersectionModule],
  exports: [CapImgComponent],
})
export class CapImgModule {}
