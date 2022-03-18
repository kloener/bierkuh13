import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UserStoreEffects } from './user-store.effects';

describe('UserStoreEffects', () => {
  let actions$: Observable<any>;
  let effects: UserStoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserStoreEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(UserStoreEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
