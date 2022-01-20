import { Meta } from '@storybook/angular/types-6-0';
import { IconButtonComponent } from '../../atoms/icon-button/icon-button.component';
import { FooterComponent } from './footer.component';

export default {
  title: 'Components/Footer',
  component: FooterComponent,
} as Meta;

export const Footer = () => ({
  moduleMetadata: {
    declarations: [IconButtonComponent],
  },
  props: {
    label: 'Footer',
  },
});
