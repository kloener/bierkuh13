import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';

@Directive({
  selector: '[appIntersection]',
})
export class IntersectionDirective implements OnInit, OnDestroy {
  @Output() isIntersection = new EventEmitter<boolean>();

  private observer: IntersectionObserver | undefined;
  private readonly isIntersectingSubject = new BehaviorSubject<boolean>(false);
  private readonly destroySubject = new Subject<void>();

  constructor(private readonly elementRef: ElementRef) {
    this.isIntersectingSubject
      .pipe(takeUntil(this.destroySubject))
      .subscribe((isIntersection) => {
        this.isIntersection.emit(isIntersection);
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
      rootMargin: '0px',
      threshold: 0.05,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.isIntersectingSubject.next(entry.isIntersecting);
      });
    }, options);

    this.observer.observe(this.elementRef.nativeElement);
  }
}
