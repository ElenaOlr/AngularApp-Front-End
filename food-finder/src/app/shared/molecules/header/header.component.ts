import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import appText from '../../../utils/AppText.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() loggedIn: boolean;
  @Output() onLogOutClick: EventEmitter<void> = new EventEmitter<void>();
  logIn: string = appText.login.loginButtonLabel;
  logOut: string = appText.login.logoutButtonLabel;

  ngOnInit(): void {}

  handleLogoutClick() {
    this.onLogOutClick.emit();
  }
}
