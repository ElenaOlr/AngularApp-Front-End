import { Meta } from '@storybook/angular/types-6-0';
import { CheckboxComponent } from './checkbox.component';

export default {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
} as Meta;

export const PrimaryCheckbox = () => ({
  props: {
    label: 'Checkbox',
  },
});
