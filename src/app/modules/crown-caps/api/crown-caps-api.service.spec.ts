import { TestBed } from '@angular/core/testing';

import { CrownCapsApiService } from './crown-caps-api.service';

describe('CrownCapsApiService', () => {
  let service: CrownCapsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrownCapsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
