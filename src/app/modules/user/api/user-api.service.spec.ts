import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { UserApiService } from './user-api.service';
import { UserInfraService } from '../infra/user-infra.service';
import { of } from 'rxjs';

describe('UserApiService', () => {
  let service: UserApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: UserInfraService,
          useValue: {
            isLoggedIn$: of(true),
          }
      }
      ]
    });
    service = TestBed.inject(UserApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
