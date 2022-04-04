import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserCredential } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginFormFacadeService } from '@app/modules/user/application/login-form-facade.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    username: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
  });

  loginFailed = false;

  @Output()
  loggedIn = new EventEmitter<UserCredential>();

  constructor(private readonly router: Router, private readonly facadeService: LoginFormFacadeService, private readonly fb: FormBuilder) {}

  async onLoginSubmit(): Promise<void> {
    this.loginFailed = false;

    if (this.loginForm.invalid) {
      return;
    }

    const result = await this.facadeService.login(this.loginForm.value);

    if (result) {
      this.loggedIn.next(result);
    } else {
      this.loginFailed = true;
    }
  }

  ngOnInit(): void {
  }

}
