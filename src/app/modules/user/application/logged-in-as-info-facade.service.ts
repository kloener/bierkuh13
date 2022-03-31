import {Injectable} from '@angular/core';
import {UserInfraService} from "@app/modules/user/infrastructure/user-infra.service";
import {map, Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoggedInAsInfoFacadeService {
  readonly userName$: Observable<string> = this.infraServie.authState$.pipe(map(auth => String(auth && auth.email)));
  constructor(private readonly router: Router, private readonly infraServie: UserInfraService) {}

  async logout() {
    await this.infraServie.signOut();
    return this.router.navigate(['/']);
  }
}
