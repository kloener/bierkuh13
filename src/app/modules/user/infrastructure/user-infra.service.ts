import {Injectable} from '@angular/core';
import {Auth, UserCredential, signInWithEmailAndPassword, User} from '@angular/fire/auth';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfraService {
  authState$: Observable<User | null>;
  isLoggedIn$: Observable<boolean>;

  constructor(private readonly fireAuth: Auth) {
    this.authState$ = new Observable<User | null>(observer => {
      return this.fireAuth.onAuthStateChanged(
        user => observer.next(user),
        error => observer.error(error),
        () => observer.complete(),
      );
    });

    this.isLoggedIn$ = this.authState$.pipe(map(user => user !== null));
  }

  signInWithEmailAndPassword({password, username}: { username: string, password: string }): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.fireAuth, username, password);
  }

  async signOut() {
    return this.fireAuth.signOut();
  }
}
