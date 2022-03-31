import { TestBed } from '@angular/core/testing';

import { LoggedInAsInfoFacadeService } from './logged-in-as-info-facade.service';

describe('LoggedInAsInfoFacadeService', () => {
  let service: LoggedInAsInfoFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggedInAsInfoFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
