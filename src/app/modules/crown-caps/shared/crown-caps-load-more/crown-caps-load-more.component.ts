import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IntersectionDirective } from '@app/shared/intersection/intersection.directive';

@Component({
  selector: 'app-crown-caps-load-more',
  templateUrl: './crown-caps-load-more.component.html',
  styleUrls: ['./crown-caps-load-more.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IntersectionDirective]
})
export class CrownCapsLoadMoreComponent {
  // TODO: Skipped for migration because:
  //  Accessor inputs cannot be migrated as they are too complex.
  @Input() set autoByIntersection(val: boolean | null | undefined) {
    this.useIntersection = Boolean(val);
  }

  @Output() loadMore = new EventEmitter();

  private useIntersection: boolean = false;

  isIntersection(isIntersection: boolean) {
    if (isIntersection && this.useIntersection) {
      console.log('CrownCapsLoadMoreComponent loadMore due to intersection!');
      this.loadMore.emit();
    }
  }
}
