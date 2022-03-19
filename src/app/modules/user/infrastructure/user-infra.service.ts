import { Injectable } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfraService {
  authState$: Observable<User | null>;
  isLoggedIn$: Observable<boolean>;

  constructor(private readonly fireAuth: Auth) {
    this.authState$ = new Observable<User | null>(observer => {
      return this.fireAuth.onAuthStateChanged(observer);
    });

    this.isLoggedIn$ = this.authState$.pipe(map(user => user !== null));
  }
}
