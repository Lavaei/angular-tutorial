import { TestBed } from '@angular/core/testing';

import { OnlyGuestsGuard } from './only-guests.guard';

describe('OnlyGuestsGuard', () => {
  let guard: OnlyGuestsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnlyGuestsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
