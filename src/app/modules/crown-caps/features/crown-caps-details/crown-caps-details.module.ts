import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CapImgModule } from '@app/shared/cap-img/cap-img.module';

import { CrownCapsDetailsComponent } from './crown-caps-details.component';

@NgModule({
  declarations: [CrownCapsDetailsComponent],
  imports: [CommonModule, RouterModule, CapImgModule],
  exports: [CrownCapsDetailsComponent],
})
export class CrownCapsDetailsModule {}
