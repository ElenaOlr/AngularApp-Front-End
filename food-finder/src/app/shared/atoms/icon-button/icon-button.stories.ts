import { Meta } from '@storybook/angular/types-6-0';
import { IconButtonComponent } from './icon-button.component';

export default {
  title: 'Components/IconButton',
  component: IconButtonComponent,
  argTypes: {
    icon: {
      options: [
        'button__logo',
        'button__like',
        'button__dislike',
        'button__favorite',
        'button__skip',
        'button__instagram',
        'button__facebook',
        'button__linkedln',
        'button__delete',
      ],
      control: { type: 'select' },
    },
    customClass: { options: ['buttonClass'], control: { type: 'select' } },
  },
} as Meta;

export const Logo = () => ({
  props: {
    icon: 'button__logo',
    customClass: 'button-logo',
  },
});

export const Like = () => ({
  props: {
    icon: 'button__like',
  },
});

export const Like_disable = () => ({
  props: {
    icon: 'button__like',
    customClass: 'button-disabled',
  },
});

export const Dislike = () => ({
  props: {
    icon: 'button__dislike',
  },
});

export const Favorite = () => ({
  props: {
    icon: 'button__favorite',
  },
});

export const Favorite_disable = () => ({
  props: {
    icon: 'button__favorite',
    customClass: 'button-disabled',
  },
});

export const Skip = () => ({
  props: {
    icon: 'button__skip',
  },
});

export const Delete = () => ({
  props: {
    icon: 'button__delete',
    customClass: 'button-delete',
  },
});

export const Instagram = () => ({
  props: {
    icon: 'button__instagram',
    customClass: 'button-social',
  },
});

export const Facebook = () => ({
  props: {
    icon: 'button__facebook',
    customClass: 'button-social',
  },
});

export const Linkedln = () => ({
  props: {
    icon: 'button__linkedln',
    customClass: 'button-social',
  },
});
