import { TestBed } from '@angular/core/testing';

import { BeerBrandsFilterFacadeService } from './beer-brands-filter-facade.service';

describe('BeerBrandsFilterFacadeService', () => {
  let service: BeerBrandsFilterFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeerBrandsFilterFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
