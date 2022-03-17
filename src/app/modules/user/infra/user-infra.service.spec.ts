import { TestBed } from '@angular/core/testing';

import { UserInfraService } from './user-infra.service';

describe('UserInfraService', () => {
  let service: UserInfraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInfraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
