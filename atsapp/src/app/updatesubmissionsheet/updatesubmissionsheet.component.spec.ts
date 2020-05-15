import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesubmissionsheetComponent } from './updatesubmissionsheet.component';

describe('UpdatesubmissionsheetComponent', () => {
  let component: UpdatesubmissionsheetComponent;
  let fixture: ComponentFixture<UpdatesubmissionsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatesubmissionsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesubmissionsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
