import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BeerBrandsManageModule } from '@app/modules/beer-brands/features/beer-brands-manage/beer-brands-manage.module';
import { LoggedInAsInfoModule } from '@app/modules/user/features/logged-in-as-info/logged-in-as-info.module';

import { AdminBeerBrandsPageRoutingModule } from './admin-beer-brands-page-routing.module';
import { AdminBeerBrandsPageComponent } from './admin-beer-brands-page.component';


@NgModule({
  declarations: [
    AdminBeerBrandsPageComponent
  ],
  imports: [
    CommonModule,
    AdminBeerBrandsPageRoutingModule,
    BeerBrandsManageModule,
    LoggedInAsInfoModule,
  ]
})
export class AdminBeerBrandsPageModule { }
