import { createAction, props } from '@ngrx/store';

export const loadUserStores = createAction(
  '[UserStore] Load UserStores'
);

export const loadUserStoresSuccess = createAction(
  '[UserStore] Load UserStores Success',
  props<{ data: any }>()
);

export const loadUserStoresFailure = createAction(
  '[UserStore] Load UserStores Failure',
  props<{ error: any }>()
);
