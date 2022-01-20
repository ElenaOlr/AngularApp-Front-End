import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/molecules/services/auth/auth.service';
import appText from '../../utils/AppText.json';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  @Input() descriptionLandingPage: string = appText.descriptions.descriptionLandingPage;
  appText = appText;
  isRegisterOpen: boolean = false;
  isLoginOpen: boolean = false;
  dialogElement: HTMLElement;

  ngOnInit(): void {
    if (this.auth.hasGoogleCookie()) {
      this.auth.initialize().subscribe();
    }
  }

  constructor(private auth: AuthService, private router: Router) {}

  openRegisterDialog() {
    this.isRegisterOpen = true;
  }

  openLoginDialog(event: Event) {
    if (this.auth.hasGoogleCookie()) {
      this.auth.googleLoginStatus().subscribe((res) => {
        if (res) {
          this.router.navigate(['/app']);
        }
      });
    }
    this.auth.isSignedIn().subscribe((res: any) => {
      if (res.user) {
        this.router.navigate(['/app']);
      } else {
        const target = event.target as HTMLElement;
        if (target.parentElement?.id === 'loginButton') {
          this.isLoginOpen = true;
        }
      }
    });
  }

  closeDialog() {
    this.isLoginOpen = false;
    this.isRegisterOpen = false;
  }
}
