import { TestBed } from '@angular/core/testing';

import { CrownCapFilesApiService } from './crown-cap-files-api.service';

describe('CrownCapFilesApiService', () => {
  let service: CrownCapFilesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrownCapFilesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
