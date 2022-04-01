import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  CrownCapsPaginationComponent,
} from '@app/modules/crown-caps/shared/crown-caps-pagination/crown-caps-pagination.component';

@NgModule({
  declarations: [CrownCapsPaginationComponent],
  exports: [CrownCapsPaginationComponent],
  imports: [CommonModule],
})
export class CrownCapsPaginationModule {}
