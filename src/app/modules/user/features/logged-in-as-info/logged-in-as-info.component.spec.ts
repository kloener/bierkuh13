import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInAsInfoComponent } from './logged-in-as-info.component';

describe('LoggedInAsInfoComponent', () => {
  let component: LoggedInAsInfoComponent;
  let fixture: ComponentFixture<LoggedInAsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedInAsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInAsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
