import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignassignmentComponent } from './assignassignment.component';

describe('AssignassignmentComponent', () => {
  let component: AssignassignmentComponent;
  let fixture: ComponentFixture<AssignassignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignassignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
