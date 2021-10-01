import { TestBed } from '@angular/core/testing';

import { AngularBankService } from './angular-bank.service';

describe('AngularBankService', () => {
  let service: AngularBankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularBankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
