import { TestBed } from '@angular/core/testing';

import { AvatarService } from './avatar.service';

describe('AvatarService', () => {
  let service: AvatarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvatarService);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should test the initials of fullName', () => {
    const initials = service.getInitials('Maria Pop');
    expect(initials).toEqual('MP');
  });
});
