import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { CrownCapsStoreModule } from '../modules/crown-caps/store/crown-caps-store/crown-caps-store.module';
import { UserStoreModule } from '../modules/user/store/user-store/user-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    CrownCapsStoreModule,
    UserStoreModule,
  ]
})
export class RootStoreModule { }
