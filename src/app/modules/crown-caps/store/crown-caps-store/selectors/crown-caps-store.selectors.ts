import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCrownCapsStore from '../reducers/crown-caps-store.reducer';

export const selectCrownCapsStoreState = createFeatureSelector<fromCrownCapsStore.State>(
  fromCrownCapsStore.crownCapsStoreFeatureKey
);
