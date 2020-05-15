import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterjoiningsheetComponent } from './recruiterjoiningsheet.component';

describe('RecruiterjoiningsheetComponent', () => {
  let component: RecruiterjoiningsheetComponent;
  let fixture: ComponentFixture<RecruiterjoiningsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterjoiningsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterjoiningsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
