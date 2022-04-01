import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CrownCapsCountModule } from '@app/modules/crown-caps/features/crown-caps-count/crown-caps-count.module';
import { CrownCapsListModule } from '@app/modules/crown-caps/features/crown-caps-list/crown-caps-list.module';
import { CrownCapsSearchModule } from '@app/modules/crown-caps/features/crown-caps-search/crown-caps-search.module';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import {CrownCapsTableModule} from "@app/modules/crown-caps/features/crown-caps-table/crown-caps-table.module";
import {CrownCapsFilterModule} from "@app/modules/crown-caps/features/crown-caps-filter/crown-caps-filter.module";


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    CrownCapsListModule,
    CrownCapsSearchModule,
    CrownCapsCountModule,
    CrownCapsTableModule,
    CrownCapsFilterModule,
  ]
})
export class HomePageModule { }
