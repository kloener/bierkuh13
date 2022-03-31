import { TestBed } from '@angular/core/testing';

import { CrownCapsUpdateFormFacadeService } from './crown-caps-update-form-facade.service';

describe('CrownCapsUpdateFormFacadeService', () => {
  let service: CrownCapsUpdateFormFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrownCapsUpdateFormFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
