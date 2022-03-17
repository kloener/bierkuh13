import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrownCapsDetailsComponent } from './crown-caps-details.component';

describe('CrownCapsDetailsComponent', () => {
  let component: CrownCapsDetailsComponent;
  let fixture: ComponentFixture<CrownCapsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrownCapsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrownCapsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
