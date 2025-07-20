import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-button',
  templateUrl: './upload-button.component.html',
  styleUrls: ['./upload-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
