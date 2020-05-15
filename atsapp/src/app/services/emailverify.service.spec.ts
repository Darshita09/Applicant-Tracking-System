import { TestBed } from '@angular/core/testing';

import { EmailverifyService } from './emailverify.service';

describe('EmailverifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailverifyService = TestBed.get(EmailverifyService);
    expect(service).toBeTruthy();
  });
});
