import { TestBed } from '@angular/core/testing';

import { CrownCapsCountFacadeService } from './crown-caps-count-facade.service';

describe('CrownCapsCountFacadeService', () => {
  let service: CrownCapsCountFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrownCapsCountFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
