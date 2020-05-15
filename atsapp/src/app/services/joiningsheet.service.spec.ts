import { TestBed } from '@angular/core/testing';

import { JoiningsheetService } from './joiningsheet.service';

describe('JoiningsheetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JoiningsheetService = TestBed.get(JoiningsheetService);
    expect(service).toBeTruthy();
  });
});
