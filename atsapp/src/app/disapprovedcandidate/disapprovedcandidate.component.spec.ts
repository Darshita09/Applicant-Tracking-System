import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisapprovedcandidateComponent } from './disapprovedcandidate.component';

describe('DisapprovedcandidateComponent', () => {
  let component: DisapprovedcandidateComponent;
  let fixture: ComponentFixture<DisapprovedcandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisapprovedcandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisapprovedcandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
