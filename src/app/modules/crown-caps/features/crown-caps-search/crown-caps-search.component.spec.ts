import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrownCapsSearchComponent } from './crown-caps-search.component';

describe('CrownCapsSearchComponent', () => {
  let component: CrownCapsSearchComponent;
  let fixture: ComponentFixture<CrownCapsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrownCapsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrownCapsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
