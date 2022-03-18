import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CrownCapsListModule } from '@app/modules/crown-caps/features/crown-caps-list/crown-caps-list.module';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    CrownCapsListModule,
  ]
})
export class HomePageModule { }
