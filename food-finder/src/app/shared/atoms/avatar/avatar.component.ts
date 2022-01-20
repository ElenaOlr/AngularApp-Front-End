import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AvatarService } from 'src/app/avatar.service';
import { AuthService } from '../../molecules/services/auth/auth.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  fullName: string = '';
  @Input() isChecked: boolean;
  @Output() onClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  initials: string = '';

  constructor(private service: AvatarService, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUser().subscribe((res) => {
      if (this.authService.hasGoogleCookie()) {
        this.fullName = res.getName();
      } else {
        this.fullName = res.user.username;
      }
      this.getInitials();
    });
  }

  getInitials(): void {
    this.initials = this.service.getInitials(this.fullName);
  }

  handleClick() {
    this.isChecked = !this.isChecked;
    this.onClick.emit(this.isChecked);
  }
}
