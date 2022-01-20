import { TestBed } from '@angular/core/testing';

import { SelectButtonGroupService } from './select-button-group.service';

describe('SelectButtonGroupService', () => {
  let service: SelectButtonGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectButtonGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
