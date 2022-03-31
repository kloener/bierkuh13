import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminListPageRoutingModule } from './admin-list-page-routing.module';
import { AdminListPageComponent } from './admin-list-page.component';
import {CrownCapsSearchModule} from "@app/modules/crown-caps/features/crown-caps-search/crown-caps-search.module";
import {CrownCapsCountModule} from "@app/modules/crown-caps/features/crown-caps-count/crown-caps-count.module";
import {CrownCapsTableModule} from "@app/modules/crown-caps/features/crown-caps-table/crown-caps-table.module";
import {LoggedInAsInfoModule} from "@app/modules/user/features/logged-in-as-info/logged-in-as-info.module";


@NgModule({
  declarations: [
    AdminListPageComponent
  ],
  imports: [
    CommonModule,
    AdminListPageRoutingModule,
    CrownCapsSearchModule,
    CrownCapsCountModule,
    CrownCapsTableModule,
    LoggedInAsInfoModule
  ]
})
export class AdminListPageModule { }
