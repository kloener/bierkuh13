import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCrownCapsStore from './reducers/crown-caps-store.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CrownCapsStoreEffects } from './effects/crown-caps-store.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCrownCapsStore.crownCapsStoreFeatureKey, fromCrownCapsStore.reducer),
    EffectsModule.forFeature([CrownCapsStoreEffects])
  ]
})
export class CrownCapsStoreModule { }
