import { TestBed } from '@angular/core/testing';

import { CrownCapsTableFacadeService } from './crown-caps-table-facade.service';

describe('CrownCapsTableFacadeService', () => {
  let service: CrownCapsTableFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrownCapsTableFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
