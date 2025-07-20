import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import {UserCredential} from "@angular/fire/auth";
import {Router} from "@angular/router";
import { LoginFormComponent } from "@app/modules/user/features/login-form/login-form.component";

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [LoginFormComponent]
})
export class AdminLoginPageComponent  {
  private readonly router = inject(Router);

  onLoggedIn(userCredential: UserCredential) {
    console.log(userCredential);
    return this.router.navigate([
      '/admin-list', 1
    ])
  }
}
