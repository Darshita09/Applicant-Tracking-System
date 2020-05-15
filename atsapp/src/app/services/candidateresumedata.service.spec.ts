import { TestBed } from '@angular/core/testing';

import { CandidateresumedataService } from './candidateresumedata.service';

describe('CandidateresumedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidateresumedataService = TestBed.get(CandidateresumedataService);
    expect(service).toBeTruthy();
  });
});
