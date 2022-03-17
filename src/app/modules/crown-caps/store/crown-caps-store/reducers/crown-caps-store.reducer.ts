import { Action, createReducer, on } from '@ngrx/store';
import * as CrownCapsStoreActions from '../actions/crown-caps-store.actions';

export const crownCapsStoreFeatureKey = 'crownCapsStore';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(CrownCapsStoreActions.loadCrownCapsStores, state => state),
  on(CrownCapsStoreActions.loadCrownCapsStoresSuccess, (state, action) => state),
  on(CrownCapsStoreActions.loadCrownCapsStoresFailure, (state, action) => state),

);
