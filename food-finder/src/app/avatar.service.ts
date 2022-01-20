import { Injectable } from '@angular/core';
import { constants } from './utils/constants';

@Injectable({
  providedIn: 'root',
})
export class AvatarService {
  getInitials(fullName: string) {
    if (fullName.includes(constants.spaceSeparator)) {
      const name = fullName.split(constants.spaceSeparator);
      let initials = name.shift()!.charAt(0) + name.pop()!.charAt(0);
      initials = initials.toUpperCase();
      return initials;
    } else {
      return fullName.charAt(0).toUpperCase();
    }
  }
}
