import { ChangeDetectionStrategy, Component, OnInit, inject, output } from '@angular/core';
import { UserCredential } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginFormFacadeService } from '@app/modules/user/application/login-form-facade.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, RouterLink]
})
export class LoginFormComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly facadeService = inject(LoginFormFacadeService);
  private readonly fb = inject(FormBuilder);

  loginForm: FormGroup = this.fb.group({
    username: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
  });

  loginFailed = false;

  readonly loggedIn = output<UserCredential>();

  async onLoginSubmit(): Promise<void> {
    this.loginFailed = false;

    if (this.loginForm.invalid) {
      return;
    }

    const result = await this.facadeService.login(this.loginForm.value);

    if (result) {
      this.loggedIn.emit(result);
    } else {
      this.loginFailed = true;
    }
  }

  ngOnInit(): void {
  }

}
