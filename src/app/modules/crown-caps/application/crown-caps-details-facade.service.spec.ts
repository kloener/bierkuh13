import { TestBed } from '@angular/core/testing';

import { CrownCapsDetailsFacadeService } from './crown-caps-details-facade.service';

describe('CrownCapsDetailsFacadeService', () => {
  let service: CrownCapsDetailsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrownCapsDetailsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
