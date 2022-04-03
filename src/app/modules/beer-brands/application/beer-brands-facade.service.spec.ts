import { TestBed } from '@angular/core/testing';

import { BeerBrandsFacadeService } from './beer-brands-facade.service';

describe('BeerBrandsFacadeService', () => {
  let service: BeerBrandsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeerBrandsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
