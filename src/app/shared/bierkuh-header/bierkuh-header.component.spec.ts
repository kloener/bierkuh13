import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BierkuhHeaderComponent } from './bierkuh-header.component';

describe('BierkuhHeaderComponent', () => {
  let component: BierkuhHeaderComponent;
  let fixture: ComponentFixture<BierkuhHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BierkuhHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BierkuhHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
