import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { getInputRequiredErrorMessage } from 'src/app/utils/functions';
import { RegexPattern } from 'src/app/utils/regex';
import appText from '../../../utils/AppText.json';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  providers: [AuthService],
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  appText = appText;
  showErrorMessage: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern(RegexPattern.username)]],
      email: ['', [Validators.required, Validators.pattern(RegexPattern.email)]],
      password: ['', [Validators.required, Validators.pattern(RegexPattern.password)]],
      confirmPassword: ['', [Validators.required]],
    });
    this.authService.initialize().subscribe();
  }

  registerData = {
    username: this.appText.registration.register.username,
    email: this.appText.registration.register.email,
    password: this.appText.registration.register.password,
    confirmPassword: this.appText.registration.register.confirmPassword,
  };

  get username() {
    return <FormControl> this.registerForm.get('username');
  }

  get email() {
    return <FormControl> this.registerForm.get('email');
  }

  get password() {
    return <FormControl> this.registerForm.get('password');
  }

  get confirmPassword() {
    return <FormControl> this.registerForm.get('confirmPassword');
  }

  getErrorMessageUsername(formControl: FormControl): string {
    if (formControl.hasError('pattern')) {
      return this.registerData.username.errorMessage;
    }
    return getInputRequiredErrorMessage(formControl);
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

  getErrorMessageConfirmPassword(formControl: FormControl): string {
    if (this.password.value !== this.confirmPassword.value) {
      return this.registerData.confirmPassword.errorMesage;
    }
    return getInputRequiredErrorMessage(formControl);
  }

  googleSignIn() {
    this.authService.googleSignIn().subscribe();
  }

  onSubmit() {
    if (this.registerForm.valid && this.getErrorMessageConfirmPassword(this.confirmPassword) === '') {
      this.authService.addUser({
        username: this.username.value,
        email: this.email.value,
        password: this.password.value,
      });

      this.toastr.success('', appText.toastrMessage.registerSuccessTitle, {
        timeOut: 3000,
      });
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
}
