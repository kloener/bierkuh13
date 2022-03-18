import { TestBed } from '@angular/core/testing';
import { UserApiService } from '@app/modules/user/api/user-api.service';
import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuard', () => {
  let guard: AuthGuard;


  let testScheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        {
          provide: UserApiService,
          useValue: {
            toApp: {
              isLoggedIn$: of(true)
            }
          }
        }
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  beforeEach(() => testScheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  }));

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return result of UserApiService', () => {
    testScheduler.run((helpers) => {
      const { expectObservable } = helpers;
      expectObservable(guard.canActivate()).toBe('(a|)', { a: true });
    });
  });
});
