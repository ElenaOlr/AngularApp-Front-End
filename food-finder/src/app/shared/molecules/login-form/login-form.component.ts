import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { getInputRequiredErrorMessage } from 'src/app/utils/functions';
import { RegexPattern } from 'src/app/utils/regex';
import AppText from 'src/app/utils/AppText.json';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth/auth.service';
import appText from '../../../utils/AppText.json';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [AuthService],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  appText = AppText;
  showErrorMessage: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(RegexPattern.email)]],
      password: ['', [Validators.required, Validators.pattern(RegexPattern.password)]],
    });
    this.authService.initialize().subscribe();
  }

  registerData = {
    email: this.appText.registration.register.email,
    password: this.appText.registration.register.password,
  };

  get email() {
    return <FormControl> this.loginForm.get('email');
  }

  get password() {
    return <FormControl> this.loginForm.get('password');
  }

  getErrorMessageEmail(formControl: FormControl): string {
    if (formControl.hasError('pattern')) {
      return this.registerData.email.errorMessage;
    }
    return getInputRequiredErrorMessage(formControl);
  }

  getErrorMessagePassword(formControl: FormControl): string {
    if (formControl.hasError('pattern')) {
      return this.registerData.password.errorMessage;
    }
    return getInputRequiredErrorMessage(formControl);
  }

  googleSignIn() {
    this.authService.googleSignIn().subscribe();
  }

  signIn() {
    if (this.loginForm.valid) {
      this.authService.signIn(this.loginForm.value);
    } else {
      this.showErrorMessage = true;
      this.toastr.error(
        appText.toastrMessage.registerErrorMessage,
        appText.toastrMessage.registerErrorTitle,
        {
          timeOut: 3000,
        },
      );
    }
  }

  signOut() {
    this.authService.signOut();
  }
}
