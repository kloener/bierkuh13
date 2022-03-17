import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapImgComponent } from './cap-img.component';

describe('CapImgComponent', () => {
  let component: CapImgComponent;
  let fixture: ComponentFixture<CapImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
