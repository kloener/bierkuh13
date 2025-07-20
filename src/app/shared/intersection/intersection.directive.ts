import { Directive, ElementRef, OnDestroy, OnInit, inject, output } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';

@Directive({
  selector: '[appIntersection]',
  standalone: true
})
export class IntersectionDirective implements OnInit, OnDestroy {
  private readonly elementRef = inject(ElementRef);

  readonly isIntersection = output<boolean>();

  private observer: IntersectionObserver | undefined;
  private readonly isIntersectingSubject = new BehaviorSubject<boolean>(false);
  private readonly destroySubject = new Subject<void>();

  constructor() {
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
