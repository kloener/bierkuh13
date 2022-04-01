import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrownCapsFilterComponent } from './crown-caps-filter.component';

describe('CrownCapsFilterComponent', () => {
  let component: CrownCapsFilterComponent;
  let fixture: ComponentFixture<CrownCapsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrownCapsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrownCapsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
