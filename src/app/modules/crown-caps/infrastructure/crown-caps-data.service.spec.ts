import { TestBed } from '@angular/core/testing';

import { CrownCapsDataService } from './crown-caps-data.service';

describe('CrownCapsInfraService', () => {
  let service: CrownCapsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrownCapsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
