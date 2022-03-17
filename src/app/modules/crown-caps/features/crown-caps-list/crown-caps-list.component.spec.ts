import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrownCapsListComponent } from './crown-caps-list.component';

describe('CrownCapsListComponent', () => {
  let component: CrownCapsListComponent;
  let fixture: ComponentFixture<CrownCapsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrownCapsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrownCapsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
