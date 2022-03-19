import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrownCapsCountComponent } from './crown-caps-count.component';

describe('CrownCapsCountComponent', () => {
  let component: CrownCapsCountComponent;
  let fixture: ComponentFixture<CrownCapsCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrownCapsCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrownCapsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
