import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpsertPageComponent } from './admin-upsert-page.component';

describe('AdminUpsertPageComponent', () => {
  let component: AdminUpsertPageComponent;
  let fixture: ComponentFixture<AdminUpsertPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUpsertPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpsertPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
