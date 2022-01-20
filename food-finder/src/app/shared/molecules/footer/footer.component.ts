import { Component, OnInit, Input } from '@angular/core';
import { FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL } from 'src/app/utils/social';
import appText from '../../../utils/AppText.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() customClass: string;
  @Input() copyrightText: string = appText.copyrights.copyrightsText;

  ngOnInit(): void {}

  goToFacebook() {
    window.open(FACEBOOK_URL, '_blank');
  }
  goToInstagram() {
    window.open(INSTAGRAM_URL, '_blank');
  }
  goToLinkedln() {
    window.open(LINKEDIN_URL, '_blank');
  }
}
