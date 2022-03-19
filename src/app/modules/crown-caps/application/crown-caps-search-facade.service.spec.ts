import { TestBed } from '@angular/core/testing';

import { CrownCapsSearchFacadeService } from './crown-caps-search-facade.service';

describe('CrownCapsSearchFacadeService', () => {
  let service: CrownCapsSearchFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrownCapsSearchFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
