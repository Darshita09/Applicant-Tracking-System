import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumecheckingComponent } from './resumechecking.component';

describe('ResumecheckingComponent', () => {
  let component: ResumecheckingComponent;
  let fixture: ComponentFixture<ResumecheckingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumecheckingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumecheckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
