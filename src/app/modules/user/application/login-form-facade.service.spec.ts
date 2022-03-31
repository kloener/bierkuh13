import { TestBed } from '@angular/core/testing';

import { LoginFormFacadeService } from './login-form-facade.service';

describe('LoginFormFacadeService', () => {
  let service: LoginFormFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginFormFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
