import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CapImgModule } from '@app/shared/cap-img/cap-img.module';

import { CrownCapsDetailsComponent } from './crown-caps-details.component';

@NgModule({
  declarations: [CrownCapsDetailsComponent],
  imports: [CommonModule, CapImgModule],
  exports: [CrownCapsDetailsComponent],
})
export class CrownCapsDetailsModule {}
