import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrownCapUploadFilesInputComponent } from './crown-cap-upload-files-input.component';
import {UploadFileInputModule} from "@app/shared/upload-file-input/upload-file-input.module";



@NgModule({
  declarations: [
    CrownCapUploadFilesInputComponent
  ],
  imports: [
    CommonModule,
    UploadFileInputModule
  ],
  exports: [
    CrownCapUploadFilesInputComponent
  ]
})
export class CrownCapUploadFilesInputModule { }
