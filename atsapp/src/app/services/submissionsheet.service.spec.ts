import { TestBed } from '@angular/core/testing';

import { SubmissionsheetService } from './submissionsheet.service';

describe('SubmissionsheetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubmissionsheetService = TestBed.get(SubmissionsheetService);
    expect(service).toBeTruthy();
  });
});
