import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrownCapsTableComponent } from './crown-caps-table.component';

describe('CrownCapsTableComponent', () => {
  let component: CrownCapsTableComponent;
  let fixture: ComponentFixture<CrownCapsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrownCapsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrownCapsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
