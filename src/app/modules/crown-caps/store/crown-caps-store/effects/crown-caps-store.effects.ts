import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as CrownCapsStoreActions from '../actions/crown-caps-store.actions';



@Injectable()
export class CrownCapsStoreEffects {

  loadCrownCapsStores$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(CrownCapsStoreActions.loadCrownCapsStores),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => CrownCapsStoreActions.loadCrownCapsStoresSuccess({ data })),
          catchError(error => of(CrownCapsStoreActions.loadCrownCapsStoresFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
