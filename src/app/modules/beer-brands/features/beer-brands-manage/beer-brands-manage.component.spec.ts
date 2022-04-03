import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerBrandsManageComponent } from './beer-brands-manage.component';

describe('BeerBrandsManageComponent', () => {
  let component: BeerBrandsManageComponent;
  let fixture: ComponentFixture<BeerBrandsManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerBrandsManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerBrandsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
