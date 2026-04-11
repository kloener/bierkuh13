import { ChangeDetectionStrategy, Component, effect, input, output, signal } from '@angular/core';
import { IntersectionDirective } from '../intersection/intersection.directive';

@Component({
  selector: 'app-cap-img',
  templateUrl: './cap-img.component.html',
  styleUrls: ['./cap-img.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IntersectionDirective]
})
export class CapImgComponent {
  readonly fileUri = input<(string | null) | undefined>(null);
  readonly name = input<(string | null) | undefined>(null);

  readonly error = output();

  /** After load (or empty URI / error): show image without a hard pop-in. */
  readonly imageReady = signal(false);

  constructor() {
    effect(() => {
      const uri = this.fileUri();
      this.imageReady.set(false);
      if (uri == null || uri === '') {
        this.imageReady.set(true);
      }
    });
  }

  onImageLoaded() {
    this.imageReady.set(true);
  }

  onImageLoadError(event: ErrorEvent) {
    const imgEl = event.target as HTMLImageElement;
    console.warn('Could not load image', imgEl.src);
    imgEl.classList.add('has-error');
    this.imageReady.set(true);
    this.error.emit();
  }

  /**
   * js-style of lazy-loading.
   * @param isIntersection
   * @param imgEl
   */
  isIntersection(isIntersection: boolean, imgEl: HTMLImageElement) {
    if (!imgEl.src && isIntersection) {
      const actualSrc = imgEl.getAttribute('data-src');
      if (actualSrc) {
        imgEl.src = actualSrc;
      }
    }
  }
}
