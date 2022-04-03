import { TestBed } from '@angular/core/testing';

import { BeerBrandsDataService } from './beer-brands-data.service';

describe('BeerBrandsDataService', () => {
  let service: BeerBrandsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeerBrandsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
