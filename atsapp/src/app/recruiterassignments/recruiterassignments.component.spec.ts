import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterassignmentsComponent } from './recruiterassignments.component';

describe('RecruiterassignmentsComponent', () => {
  let component: RecruiterassignmentsComponent;
  let fixture: ComponentFixture<RecruiterassignmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterassignmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterassignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
