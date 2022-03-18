import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserInfraService } from '../infra/user-infra.service';

import { selectUserStoreIsLoggedIn } from '../store/user-store/selectors/user-store.selectors';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  toApp = {
    isLoggedIn$: this.userInfraService.isLoggedIn$
  }

  constructor(
    private readonly userInfraService: UserInfraService
    ) {}
}
