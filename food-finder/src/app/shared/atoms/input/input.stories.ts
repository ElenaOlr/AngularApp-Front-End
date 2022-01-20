import { Meta } from '@storybook/angular/types-6-0';
import { FormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { InputComponent } from './input.component';

export default {
  title: 'Components/Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      providers: [FormsModule],
    }),
  ],
} as Meta;

export const UsernameInput = () => ({
  props: {
    placeholder: 'Enter username',
    type: 'text',
  },
});

export const EmailInput = () => ({
  props: {
    placeholder: 'Enter email',
    type: 'text',
  },
});

export const PasswordInput = () => ({
  props: {
    placeholder: 'Enter password',
    type: 'password',
  },
});
