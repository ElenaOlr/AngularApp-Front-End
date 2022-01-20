import { Meta } from '@storybook/angular/types-6-0';
import { AvatarComponent } from '../../atoms/avatar/avatar.component';
import { IconButtonComponent } from '../../atoms/icon-button/icon-button.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { HeaderComponent } from './header.component';

export default {
  title: 'Components/Header',
  component: HeaderComponent,
} as Meta;

export const LogInHeader = () => ({
  moduleMetadata: {
    declarations: [IconButtonComponent, ButtonComponent],
  },
  props: {
    loggedIn: false,
  },
});

export const LogOutHeader = () => ({
  moduleMetadata: {
    declarations: [IconButtonComponent, AvatarComponent, ButtonComponent],
  },
  props: {
    loggedIn: true,
  },
});
