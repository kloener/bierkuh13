import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { UserApiService } from '@app/modules/user/api/user-api.service';
import {first, map, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private readonly userApiService: UserApiService, private readonly router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]) {
    return this.checkAuth();
  }

  canActivate(
    route?: ActivatedRouteSnapshot,
    state?: RouterStateSnapshot) {
    return this.checkAuth();
  }

  private checkAuth(): Observable<boolean | UrlTree> {
    return this.userApiService.toApp.isLoggedIn$
      .pipe(
        first(),
        map(loggedIn => {
          if (!loggedIn) {
            return this.router.parseUrl('/admin-login');
          }
          return true;
        })
      );
  }

}
