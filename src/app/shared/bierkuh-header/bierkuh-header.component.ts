import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-bierkuh-header',
  templateUrl: './bierkuh-header.component.html',
  styleUrls: ['./bierkuh-header.component.scss']
})
export class BierkuhHeaderComponent {

  readonly headerPath: string;
  isPublicRoute$: Observable<boolean>;

  constructor(router: Router) {
    this.headerPath = 'assets/Header.png';
    this.isPublicRoute$ = router.events.pipe(
      filter<any>(event => isNavigationEnd(event)),
      map((event: NavigationEnd) => !event.url.includes('admin')),
    );

    function isNavigationEnd<T>(event: T): boolean {
      return event instanceof NavigationEnd;
    }
  }

}
