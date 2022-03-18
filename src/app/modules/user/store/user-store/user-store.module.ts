import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromUserStore from './reducers/user-store.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserStoreEffects } from './effects/user-store.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUserStore.userStoreFeatureKey, fromUserStore.reducer),
    EffectsModule.forFeature([UserStoreEffects])
  ]
})
export class UserStoreModule { }
