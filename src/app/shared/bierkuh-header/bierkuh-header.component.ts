import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, map, merge, of } from 'rxjs';

@Component({
  selector: 'app-bierkuh-header',
  templateUrl: './bierkuh-header.component.html',
  styleUrls: ['./bierkuh-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive]
})
export class BierkuhHeaderComponent {
  private readonly router = inject(Router);

  readonly headerPath = 'assets/Header.png';

  readonly homeLink = toSignal(
    merge(
      of(this.homePathSegments()),
      this.router.events.pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        map(() => this.homePathSegments())
      )
    ),
    { initialValue: this.homePathSegments() }
  );

  readonly adminListLink = toSignal(
    merge(
      of(this.adminListPathSegments()),
      this.router.events.pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        map(() => this.adminListPathSegments())
      )
    ),
    { initialValue: this.adminListPathSegments() }
  );

  private homePathSegments(): [string, string] {
    const match = /^\/home\/(\d+)/.exec(this.router.url);
    return match ? ['/home', match[1]] : ['/home', '1'];
  }

  private adminListPathSegments(): [string, string] {
    const match = /^\/admin-list\/(\d+)/.exec(this.router.url);
    return match ? ['/admin-list', match[1]] : ['/admin-list', '1'];
  }
}
