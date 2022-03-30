import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CrownCapsPaginationComponent
} from "@app/modules/crown-caps/features/crown-caps-pagination/crown-caps-pagination.component";



@NgModule({
  declarations: [CrownCapsPaginationComponent],
  exports: [CrownCapsPaginationComponent],
  imports: [
    CommonModule
  ]
})
export class CrownCapsPaginationModule { }
