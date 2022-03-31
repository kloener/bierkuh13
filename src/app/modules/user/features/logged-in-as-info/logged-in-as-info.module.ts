import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedInAsInfoComponent } from './logged-in-as-info.component';



@NgModule({
  declarations: [
    LoggedInAsInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoggedInAsInfoComponent
  ]
})
export class LoggedInAsInfoModule { }
