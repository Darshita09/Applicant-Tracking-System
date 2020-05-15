import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitersubmissionsheetComponent } from './recruitersubmissionsheet.component';

describe('RecruitersubmissionsheetComponent', () => {
  let component: RecruitersubmissionsheetComponent;
  let fixture: ComponentFixture<RecruitersubmissionsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitersubmissionsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitersubmissionsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
