import { TestBed } from '@angular/core/testing';

import { CrownCapsInfraService } from './crown-caps-infra.service';

describe('CrownCapsInfraService', () => {
  let service: CrownCapsInfraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrownCapsInfraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
