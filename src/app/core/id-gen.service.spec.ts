import { TestBed } from '@angular/core/testing';

import { IdGenService } from './id-gen.service';

describe('IdGenService', () => {
  let service: IdGenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdGenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
