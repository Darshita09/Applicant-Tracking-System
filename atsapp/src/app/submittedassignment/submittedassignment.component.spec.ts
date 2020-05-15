import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedassignmentComponent } from './submittedassignment.component';

describe('SubmittedassignmentComponent', () => {
  let component: SubmittedassignmentComponent;
  let fixture: ComponentFixture<SubmittedassignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittedassignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
