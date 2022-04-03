import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerBrandsFilterComponent } from './beer-brands-filter.component';

describe('BeerBrandsFilterComponent', () => {
  let component: BeerBrandsFilterComponent;
  let fixture: ComponentFixture<BeerBrandsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerBrandsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerBrandsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
