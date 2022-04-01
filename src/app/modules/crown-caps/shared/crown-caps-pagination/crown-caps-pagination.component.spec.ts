import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrownCapsPaginationComponent } from './crown-caps-pagination.component';

describe('CrownCapsPaginationComponent', () => {
  let component: CrownCapsPaginationComponent;
  let fixture: ComponentFixture<CrownCapsPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrownCapsPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrownCapsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
