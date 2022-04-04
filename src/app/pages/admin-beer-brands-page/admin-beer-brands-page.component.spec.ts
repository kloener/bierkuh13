import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBeerBrandsPageComponent } from './admin-beer-brands-page.component';

describe('AdminBeerBrandsPageComponent', () => {
  let component: AdminBeerBrandsPageComponent;
  let fixture: ComponentFixture<AdminBeerBrandsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBeerBrandsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBeerBrandsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
