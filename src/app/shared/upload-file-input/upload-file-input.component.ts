import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upload-file-input',
  templateUrl: './upload-file-input.component.html',
  styleUrls: ['./upload-file-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadFileInputComponent implements OnInit {
  private files?: File[];

  @Output()
  uploadFiles = new EventEmitter<File[]>();

  constructor() { }

  ngOnInit(): void {
  }

  filesChanged(event: any) {
    this.files = Array.from(event.target.files as FileList);
  }

  doUpload(fileInput: HTMLInputElement) {
    if (this.files?.length) {
      this.uploadFiles.next(this.files);
      this.files = undefined;
      fileInput.value = '';
      fileInput.type = ''
      fileInput.type = 'file'
    }
  }
}
