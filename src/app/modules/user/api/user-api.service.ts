import { Injectable, inject } from '@angular/core';

import { UserInfraService } from '../infrastructure/user-infra.service';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private readonly userInfraService = inject(UserInfraService);


  toApp = {
    isLoggedIn$: this.userInfraService.isLoggedIn$
  }
}
