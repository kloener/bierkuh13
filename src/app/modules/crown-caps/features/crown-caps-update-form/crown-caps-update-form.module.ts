import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrownCapsUpdateFormComponent } from './crown-caps-update-form.component';
import {CapImgModule} from "@app/shared/cap-img/cap-img.module";
import {AssigneeModule} from "@app/shared/assignee/assignee.module";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CrownCapsUpdateFormComponent
  ],
  imports: [
    CommonModule,
    CapImgModule,
    AssigneeModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    CrownCapsUpdateFormComponent
  ]
})
export class CrownCapsUpdateFormModule { }
