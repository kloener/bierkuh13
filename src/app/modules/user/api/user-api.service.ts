import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectUserStoreIsLoggedIn } from '../store/user-store/selectors/user-store.selectors';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  toApp = {
    isLoggedIn$: this.store.select(selectUserStoreIsLoggedIn)
  }

  constructor(private readonly store: Store) { }
}
