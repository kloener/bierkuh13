import { TestBed } from '@angular/core/testing';

import { CrownCapFilesDataService } from './crown-cap-files-data.service';

describe('CrownCapFilesDataService', () => {
  let service: CrownCapFilesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrownCapFilesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
