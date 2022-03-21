import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsPageRoutingModule } from './details-page-routing.module';
import { DetailsPageComponent } from './details-page.component';
import { CrownCapsDetailsModule } from '@app/modules/crown-caps/features/crown-caps-details/crown-caps-details.module';


@NgModule({
  declarations: [
    DetailsPageComponent
  ],
  imports: [
    CommonModule,
    DetailsPageRoutingModule,
    CrownCapsDetailsModule
  ]
})
export class DetailsPageModule { }
