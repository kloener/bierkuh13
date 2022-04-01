import { TestBed } from '@angular/core/testing';

import { CrownCapsFilterFacadeService } from './crown-caps-filter-facade.service';

describe('CrownCapsFilterFacadeService', () => {
  let service: CrownCapsFilterFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrownCapsFilterFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
