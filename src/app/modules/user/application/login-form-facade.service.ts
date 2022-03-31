import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {UserInfraService} from "@app/modules/user/infrastructure/user-infra.service";

@Injectable({
  providedIn: 'root'
})
export class LoginFormFacadeService {
  readonly isLoggedIn$: Observable<boolean> = this.infraServie.authState$.pipe(map(auth => Boolean(auth && auth.uid)));

  constructor(private readonly infraServie: UserInfraService) { }

  async login(credentials: { username: string, password: string }) {
    try {
      return await this.infraServie.signInWithEmailAndPassword(credentials);
    } catch (err) {
      console.error(err);
    }
    return null;
  }

  async logout(): Promise<void> {
    await this.infraServie.signOut();
  }
}
