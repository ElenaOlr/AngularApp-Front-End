import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { URLs } from '../../../../utils/URLs';
import SocialUser from '../../interface/SocialUser';

declare let gapi: any;
@Injectable({
  providedIn: 'root',
})
export class GoogleAuthService {
  private GOOGLE_CLIENT_ID = '42904030878-qdt0n9m269h58j7bhlo6235se2u11p31.apps.googleusercontent.com';
  private auth2: any;

  user: SocialUser;
  private backendtoken: string;

  constructor(private http: HttpClient, private ngZone: NgZone) {}

  loadScript(onload: any) {
    const gapiScript = document.createElement('script');
    gapiScript.async = true;
    gapiScript.defer = true;
    gapiScript.src = 'https://apis.google.com/js/api.js';
    gapiScript.onload = onload;
    document.head.appendChild(gapiScript);
  }

  initialize(): Observable<boolean> {
    return new Observable((observer) => {
      this.loadScript(() => {
        gapi.load('auth2', async () => {
          this.auth2 = gapi.auth2.init({
            client_id: this.GOOGLE_CLIENT_ID,
            scope: 'email',
          });
          this.auth2 = await gapi.auth2.getAuthInstance();
          this.auth2 ? observer.next(true) : observer.next(false);
        });
      });
    });
  }

  async signIn() {
    await this.auth2.signIn();
    this.getIdToken().subscribe((res: string) => {
      this.backendtoken = res;
    });
    this.ngZone.run(() => {
      this.http.post(URLs.socialAuth, { token: this.backendtoken }).subscribe(
        (res: any) => {
          this.user = res.data.user;
        },
        (err) => console.error(err.message),
      );
    });
  }

  signOut() {
    this.getLoginStatus().subscribe((res) => {
      if (res) {
        this.auth2.signOut();
      }
      return res;
    });
  }

  getLoginStatus(): Observable<boolean> {
    return of(this.auth2.isSignedIn.get()).pipe(
      catchError((err) => {
        console.error('Could not get login status');
        throw err;
      }),
    );
  }

  getIdToken(): Observable<string> {
    const token = this.auth2.currentUser.get().getAuthResponse().id_token;
    return of(token);
  }

  getBasicProfile(): Observable<any> {
    return of(this.auth2.currentUser.get().getBasicProfile());
  }
}
