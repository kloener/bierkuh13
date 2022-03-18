import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as UserStoreActions from '../actions/user-store.actions';



@Injectable()
export class UserStoreEffects {

  loadUserStores$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(UserStoreActions.loadUserStores),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => UserStoreActions.loadUserStoresSuccess({ data })),
          catchError(error => of(UserStoreActions.loadUserStoresFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
