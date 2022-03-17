import { TestBed } from '@angular/core/testing';

import { CrownCapsListFacadeService } from './crown-caps-list-facade.service';

describe('CrownCapsListFacadeService', () => {
  let service: CrownCapsListFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrownCapsListFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
