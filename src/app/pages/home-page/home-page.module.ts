import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CapImgModule } from 'src/app/shared/cap-img/cap-img.module';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,

    CapImgModule,
  ]
})
export class HomePageModule { }
