import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLs } from 'src/app/utils/URLs';
import { ToastrService } from 'ngx-toastr';
import { Observable, from, Subject } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import appText from '../../../../utils/AppText.json';
import { GoogleAuthService } from './googleAuth.service';
import { User } from '../../interface/User';

@Injectable()
export class AuthService {
  user: User;
  constructor(
    private GoogleAuth: GoogleAuthService,
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router,
  ) {}

  loginStatus = false;

  addUser(user: User) {
    this.http.post(URLs.register, user, { withCredentials: true }).subscribe(
      (res: any) => {
        this.user = res.data.user;
        this.router.navigate(['/app']);
      },
      (err) => {
        console.error('Could not create account');
        throw err;
      },
    );
  }

  initialize(): Observable<boolean> {
    return this.GoogleAuth.initialize().pipe(
      catchError((err) => {
        console.error('Cant initialize google authentication');
        throw err;
      }),
    );
  }

  googleLoginStatus(): Observable<boolean> {
    return this.GoogleAuth.getLoginStatus();
  }

  isSignedIn() {
    return this.http.post(URLs.verify, {}, { withCredentials: true });
  }

  googleSignIn() {
    return from(this.GoogleAuth.signIn()).pipe(
      finalize(() => {
        this.router.navigate(['/app']);
      }),
    );
  }

  getOpenIDToken() {
    return this.GoogleAuth.getIdToken();
  }

  signIn(user: User) {
    this.http.post(URLs.login, user, { withCredentials: true }).subscribe(
      (res: any) => {
        this.loginStatus = true;
        this.user = res.data.user;
        this.router.navigate(['/app']);
        this.toastr.success('', appText.toastrMessage.loginSuccessTitle, {
          timeOut: 3000,
        });
      },
      (err: any) => {
        if (err.status === 401) {
          console.error('invalid credentials');
          this.toastr.error('', appText.toastrMessage.loginErrorTitle, {
            timeOut: 3000,
          });
        }
        console.error('login failed');
      },
    );
  }

  signOutJWT() {
    this.http.get(URLs.logout, { withCredentials: true }).subscribe(
      () => {
        this.loginStatus = false;
      },
      () => console.error('Could not log out'),
    );
  }

  googleSignOut() {
    this.GoogleAuth.signOut();
    this.router.navigate(['']);
  }

  signOut() {
    if (this.hasGoogleCookie()) {
      this.googleLoginStatus() ? this.googleSignOut() : this.signOutJWT();
    }
    this.signOutJWT();
    this.router.navigate(['/']);
    sessionStorage.clear();
  }

  hasGoogleCookie() {
    if (document.cookie.includes('G_AUTHUSER_H')) {
      return true;
    }
    return false;
  }

  getUser(): Observable<any> {
    if (this.hasGoogleCookie()) {
      return this.GoogleAuth.getBasicProfile();
    }
    return this.isSignedIn();
  }
}
