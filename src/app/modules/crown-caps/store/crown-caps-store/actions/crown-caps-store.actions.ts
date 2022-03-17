import { createAction, props } from '@ngrx/store';

export const loadCrownCapsStores = createAction(
  '[CrownCapsStore] Load CrownCapsStores'
);

export const loadCrownCapsStoresSuccess = createAction(
  '[CrownCapsStore] Load CrownCapsStores Success',
  props<{ data: any }>()
);

export const loadCrownCapsStoresFailure = createAction(
  '[CrownCapsStore] Load CrownCapsStores Failure',
  props<{ error: any }>()
);
