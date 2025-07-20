import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import {
  CrownCapUploadFilesInputFacadeService,
} from '@app/modules/crown-caps/application/crown-cap-upload-files-input-facade.service';
import { UploadFileInputComponent } from "@app/shared/upload-file-input/upload-file-input.component";

@Component({
  selector: 'app-crown-cap-upload-files-input',
  templateUrl: './crown-cap-upload-files-input.component.html',
  styleUrls: ['./crown-cap-upload-files-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UploadFileInputComponent]
})
export class CrownCapUploadFilesInputComponent implements OnInit {
  private readonly facade = inject(CrownCapUploadFilesInputFacadeService);


  ngOnInit(): void {
  }

  async createNewCaps(files: File[]) {
    if (confirm(`Wirklich ${files.length} hochladen?`)) {
      await this.facade.createNewCaps(files);
    }
  }
}
