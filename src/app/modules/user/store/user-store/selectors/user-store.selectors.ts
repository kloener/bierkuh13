import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUserStore from '../reducers/user-store.reducer';

export const selectUserStoreState = createFeatureSelector<fromUserStore.State>(
  fromUserStore.userStoreFeatureKey
);

export const selectUserStoreIsLoggedIn = createSelector(selectUserStoreState, state => !!state.loggedIn);
