import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cap-img',
  templateUrl: './cap-img.component.html',
  styleUrls: ['./cap-img.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CapImgComponent {

  @Input() fileUri?: string | null = null;
  @Input() name?: string | null = null;

  @Output() error = new EventEmitter();

  onImageLoadError(event: ErrorEvent) {
    const imgEl = (event.target as HTMLImageElement);
    console.warn('Could not load image', imgEl.src);
    imgEl.classList.add('has-error');
    this.error.emit();
  }
}
