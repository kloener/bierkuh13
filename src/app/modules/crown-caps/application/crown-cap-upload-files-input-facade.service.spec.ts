import { TestBed } from '@angular/core/testing';

import { CrownCapUploadFilesInputFacadeService } from './crown-cap-upload-files-input-facade.service';

describe('CrownCapUploadFilesInputFacadeService', () => {
  let service: CrownCapUploadFilesInputFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrownCapUploadFilesInputFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
