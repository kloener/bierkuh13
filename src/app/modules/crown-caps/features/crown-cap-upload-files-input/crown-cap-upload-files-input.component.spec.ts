import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrownCapUploadFilesInputComponent } from './crown-cap-upload-files-input.component';

describe('CrownCapUploadFilesInputComponent', () => {
  let component: CrownCapUploadFilesInputComponent;
  let fixture: ComponentFixture<CrownCapUploadFilesInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrownCapUploadFilesInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrownCapUploadFilesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
