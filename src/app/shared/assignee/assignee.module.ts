import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AssigneePipe } from './assignee.pipe';

@NgModule({
  declarations: [AssigneePipe],
  exports: [AssigneePipe],
  imports: [CommonModule],
})
export class AssigneeModule {}
