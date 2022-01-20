import { Meta } from '@storybook/angular/types-6-0';
import { AvatarComponent } from './avatar.component';

export default {
  title: 'Components/Avatar',
  component: AvatarComponent,
  argTypes: {
    fullName: { control: 'text' },
  },
} as Meta;

export const Avatar = () => ({
  props: {
    label: 'Avatar',
    fullName: 'Frodo Baggins',
  },
});
