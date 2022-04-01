import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-crown-caps-load-more',
  templateUrl: './crown-caps-load-more.component.html',
  styleUrls: ['./crown-caps-load-more.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrownCapsLoadMoreComponent {
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
