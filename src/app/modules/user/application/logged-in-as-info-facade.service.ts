import { Injectable, inject } from '@angular/core';
import {UserInfraService} from "@app/modules/user/infrastructure/user-infra.service";
import {map, Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoggedInAsInfoFacadeService {
  private readonly router = inject(Router);
  private readonly infraServie = inject(UserInfraService);

  readonly userName$: Observable<string> = this.infraServie.authState$.pipe(map(auth => String(auth && auth.email)));

  async logout() {
    await this.infraServie.signOut();
    return this.router.navigate(['/']);
  }
}
