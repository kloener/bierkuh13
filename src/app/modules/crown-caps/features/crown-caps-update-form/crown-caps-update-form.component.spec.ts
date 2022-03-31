import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrownCapsUpdateFormComponent } from './crown-caps-update-form.component';

describe('CrownCapsUpdateFormComponent', () => {
  let component: CrownCapsUpdateFormComponent;
  let fixture: ComponentFixture<CrownCapsUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrownCapsUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrownCapsUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
