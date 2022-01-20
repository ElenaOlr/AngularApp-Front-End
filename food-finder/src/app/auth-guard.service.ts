import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { AuthService } from './shared/molecules/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  loginStatus = new Subject<boolean>();
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.auth.hasGoogleCookie()) {
      this.auth
        .initialize()
        .pipe(mergeMap(() => this.auth.googleLoginStatus()))
        .subscribe((res) => (res ? this.loginStatus.next(res) : this.checkJWT()));
      return this.getLoginStatus();
    }
    this.checkJWT();
    return this.getLoginStatus();
  }

  checkJWT() {
    this.auth.isSignedIn().subscribe((res: any) => {
      res.user ? this.loginStatus.next(true) : this.loginStatus.next(false);
    });
  }

  getLoginStatus() {
    return this.loginStatus.pipe(map((status) => (status ? true : this.router.createUrlTree(['']))));
  }
}
