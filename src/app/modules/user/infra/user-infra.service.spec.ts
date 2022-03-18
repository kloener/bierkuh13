import { TestBed } from '@angular/core/testing';
import { Auth, User } from '@angular/fire/auth';
import { Observer } from 'rxjs';

import { UserInfraService } from './user-infra.service';

describe('UserInfraService', () => {
  let service: UserInfraService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Auth,
          useValue: {
            onAuthStateChanged: (observer: Observer<User | null>) => {
              observer.next(null);
            }
          }
        }
      ]
    });
    service = TestBed.inject(UserInfraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
