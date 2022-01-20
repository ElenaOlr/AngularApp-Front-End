import { Component, NgZone, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Details } from 'src/app/shared/molecules/interface/details';
import { AuthService } from 'src/app/shared/molecules/services/auth/auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  favoritesGroup: Details[];
  constructor(public auth: AuthService, private router: Router, private ngZone: NgZone) {}

  ngOnInit(): void {
    if (this.auth.hasGoogleCookie()) {
      this.auth.initialize().subscribe();
    }
  }

  logOut() {
    this.ngZone.run(() => {
      this.auth.signOut();
    });
  }

  getFavoritesGroup(event: Details[]) {
    this.favoritesGroup = event;
  }
}
