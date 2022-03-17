import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CrownCapsStoreEffects } from './crown-caps-store.effects';

describe('CrownCapsStoreEffects', () => {
  let actions$: Observable<any>;
  let effects: CrownCapsStoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CrownCapsStoreEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CrownCapsStoreEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
