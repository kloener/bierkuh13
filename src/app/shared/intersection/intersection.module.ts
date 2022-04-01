import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IntersectionDirective } from './intersection.directive';

@NgModule({
  declarations: [IntersectionDirective],
  imports: [CommonModule],
  exports: [IntersectionDirective],
})
export class IntersectionModule {}
