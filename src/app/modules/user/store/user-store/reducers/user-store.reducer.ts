import { createReducer, on } from '@ngrx/store';

import * as UserStoreActions from '../actions/user-store.actions';

export const userStoreFeatureKey = 'userStore';

export interface State {
  loggedIn?: boolean;
}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(UserStoreActions.loadUserStores, state => state),
  on(UserStoreActions.loadUserStoresSuccess, (state, action) => state),
  on(UserStoreActions.loadUserStoresFailure, (state, action) => state),

);
