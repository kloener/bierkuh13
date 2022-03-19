import { Injectable } from '@angular/core';

import { UserInfraService } from '../infrastructure/user-infra.service';

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
