import { FormControl } from '@angular/forms';
import AppText from 'src/app/utils/AppText.json';

export const getInputRequiredErrorMessage = (formControl: FormControl): string => {
  if (formControl.hasError('required')) {
    return AppText.registration.register.mandatory;
  }
  return '';
};
