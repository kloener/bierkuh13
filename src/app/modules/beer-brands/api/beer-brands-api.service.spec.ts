import { TestBed } from '@angular/core/testing';

import { BeerBrandsApiService } from './beer-brands-api.service';

describe('BeerBrandsApiService', () => {
  let service: BeerBrandsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeerBrandsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
