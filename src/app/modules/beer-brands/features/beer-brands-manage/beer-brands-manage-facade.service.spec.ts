import { TestBed } from '@angular/core/testing';

import { BeerBrandsManageFacadeService } from './beer-brands-manage-facade.service';

describe('BeerBrandsManageFacadeService', () => {
  let service: BeerBrandsManageFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeerBrandsManageFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
