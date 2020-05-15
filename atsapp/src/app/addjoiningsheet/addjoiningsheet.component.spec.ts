import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjoiningsheetComponent } from './addjoiningsheet.component';

describe('AddjoiningsheetComponent', () => {
  let component: AddjoiningsheetComponent;
  let fixture: ComponentFixture<AddjoiningsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddjoiningsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddjoiningsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
