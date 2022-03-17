import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cap-img',
  templateUrl: './cap-img.component.html',
  styleUrls: ['./cap-img.component.scss']
})
export class CapImgComponent {

  @Input() fileUri: string | null = null;
  @Input() name: string | null = null;

}
