import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BeerBrandsFilterModule } from '@app/modules/beer-brands/features/beer-brands-filter/beer-brands-filter.module';
import {
  CrownCapUploadFilesInputModule,
} from '@app/modules/crown-caps/features/crown-cap-upload-files-input/crown-cap-upload-files-input.module';
import { CrownCapsCountModule } from '@app/modules/crown-caps/features/crown-caps-count/crown-caps-count.module';
import { CrownCapsSearchModule } from '@app/modules/crown-caps/features/crown-caps-search/crown-caps-search.module';
import { CrownCapsTableModule } from '@app/modules/crown-caps/features/crown-caps-table/crown-caps-table.module';
import { LoggedInAsInfoModule } from '@app/modules/user/features/logged-in-as-info/logged-in-as-info.module';

import { AdminListPageRoutingModule } from './admin-list-page-routing.module';
import { AdminListPageComponent } from './admin-list-page.component';

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
    LoggedInAsInfoModule,
    CrownCapUploadFilesInputModule,
    BeerBrandsFilterModule,
  ]
})
export class AdminListPageModule { }
