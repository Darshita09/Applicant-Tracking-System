import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatejoiningsheetComponent } from './updatejoiningsheet.component';

describe('UpdatejoiningsheetComponent', () => {
  let component: UpdatejoiningsheetComponent;
  let fixture: ComponentFixture<UpdatejoiningsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatejoiningsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatejoiningsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
