import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {UserCredential} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminLoginPageComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  onLoggedIn(userCredential: UserCredential) {
    console.log(userCredential);
    return this.router.navigate([
      '/admin-list', 1
    ])
  }
}
