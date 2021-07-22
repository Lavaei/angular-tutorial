import { TestBed } from '@angular/core/testing';

import { OnlyUsersGuard } from './only-users.guard';

describe('OnlyUsersGuard', () => {
  let guard: OnlyUsersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnlyUsersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
