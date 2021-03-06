import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  CrownCapUploadFilesInputFacadeService,
} from '@app/modules/crown-caps/application/crown-cap-upload-files-input-facade.service';

@Component({
  selector: 'app-crown-cap-upload-files-input',
  templateUrl: './crown-cap-upload-files-input.component.html',
  styleUrls: ['./crown-cap-upload-files-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrownCapUploadFilesInputComponent implements OnInit {

  constructor(private readonly facade: CrownCapUploadFilesInputFacadeService) { }

  ngOnInit(): void {
  }

  async createNewCaps(files: File[]) {
    if (confirm(`Wirklich ${files.length} hochladen?`)) {
      await this.facade.createNewCaps(files);
    }
  }
}
