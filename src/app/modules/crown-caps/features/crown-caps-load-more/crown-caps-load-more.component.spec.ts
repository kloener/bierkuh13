import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrownCapsLoadMoreComponent } from './crown-caps-load-more.component';

describe('CrownCapsLoadMoreComponent', () => {
  let component: CrownCapsLoadMoreComponent;
  let fixture: ComponentFixture<CrownCapsLoadMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrownCapsLoadMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrownCapsLoadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
