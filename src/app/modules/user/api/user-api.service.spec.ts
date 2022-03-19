import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { UserInfraService } from '../infrastructure/user-infra.service';
import { UserApiService } from './user-api.service';

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
