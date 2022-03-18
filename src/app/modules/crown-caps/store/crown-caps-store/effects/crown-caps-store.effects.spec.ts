import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, Subject } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { loadCrownCapsStores, loadCrownCapsStoresSuccess } from '../actions/crown-caps-store.actions';

import { CrownCapsStoreEffects } from './crown-caps-store.effects';

describe('CrownCapsStoreEffects', () => {
  let actions$ = new Subject();
  let effects: CrownCapsStoreEffects;

  let testScheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CrownCapsStoreEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CrownCapsStoreEffects);
  });

  /*
  beforeEach(() => testScheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  }));
  /* */

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should load success action', (done) => {
    const expectedAction = loadCrownCapsStoresSuccess({ data: 1 });

    effects.loadCrownCapsStores$.subscribe(action => {
      expect(action).toEqual(expectedAction);
      done();
    });

    actions$.next(loadCrownCapsStores());
  });
});
