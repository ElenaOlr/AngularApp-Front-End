import { Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form.component';
import { SharedModule } from '../../shared.module';

export default {
  title: 'Components/Login',
  component: LoginFormComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, SharedModule],
      providers: [FormBuilder],
    }),
  ],
} as Meta;

export const LoginForm = () => ({
  props: {},
});
