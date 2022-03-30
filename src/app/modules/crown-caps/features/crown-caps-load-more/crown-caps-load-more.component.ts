import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {BehaviorSubject, filter, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-crown-caps-load-more',
  templateUrl: './crown-caps-load-more.component.html',
  styleUrls: ['./crown-caps-load-more.component.scss']
})
export class CrownCapsLoadMoreComponent implements OnInit, OnDestroy {
  @Input() set autoByIntersection(val: boolean | null | undefined) {
    this.useIntersection = Boolean(val);
  }

  @Output() loadMore = new EventEmitter();

  private useIntersection: boolean = false;
  private observer: IntersectionObserver | undefined;
  private readonly isIntersectingSubject = new BehaviorSubject<boolean>(false);
  private readonly destroySubject = new Subject<void>();

  constructor(private readonly elementRef: ElementRef) {
    this.isIntersectingSubject
      .pipe(
        takeUntil(this.destroySubject),
        filter(() => this.useIntersection),
        filter(Boolean),
      )
      .subscribe(() => {
        console.log('CrownCapsLoadMoreComponent loadMore due to intersection!');
        this.loadMore.emit();
      });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.unobserve(this.elementRef.nativeElement);
      this.observer.disconnect();
      this.observer = undefined;
    }
    this.isIntersectingSubject.complete();
    this.destroySubject.next();
    this.destroySubject.complete();
  }

  ngOnInit(): void {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.05
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.isIntersectingSubject.next(entry.isIntersecting);
      });
    }, options);

    this.observer.observe(this.elementRef.nativeElement);

  }

}
