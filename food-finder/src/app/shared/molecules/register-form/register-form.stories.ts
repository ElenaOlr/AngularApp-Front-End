import { Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './register-form.component';
import { SharedModule } from '../../shared.module';
import { AuthService } from '../services/auth/auth.service';

const routes: Routes = [];

export default {
  title: 'Components/Register',
  component: RegisterFormComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, SharedModule, RouterModule.forRoot(routes)],
      providers: [FormBuilder, AuthService, { provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

export const RegisterForm = () => ({
  props: {},
});
