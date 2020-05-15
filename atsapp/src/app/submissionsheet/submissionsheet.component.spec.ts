import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionsheetComponent } from './submissionsheet.component';

describe('SubmissionsheetComponent', () => {
  let component: SubmissionsheetComponent;
  let fixture: ComponentFixture<SubmissionsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
