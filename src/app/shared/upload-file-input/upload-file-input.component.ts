import { ChangeDetectionStrategy, Component, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-upload-file-input',
  templateUrl: './upload-file-input.component.html',
  styleUrls: ['./upload-file-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadFileInputComponent implements OnInit {
  private files?: File[];

  readonly uploadFiles = output<File[]>();

  constructor() { }

  ngOnInit(): void {
  }

  filesChanged(event: any) {
    this.files = Array.from(event.target.files as FileList);
  }

  doUpload(fileInput: HTMLInputElement) {
    if (this.files?.length) {
      this.uploadFiles.emit(this.files);
      this.files = undefined;
      fileInput.value = '';
      fileInput.type = ''
      fileInput.type = 'file'
    }
  }
}
