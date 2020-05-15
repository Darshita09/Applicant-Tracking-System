import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoiningsheetComponent } from './joiningsheet.component';

describe('JoiningsheetComponent', () => {
  let component: JoiningsheetComponent;
  let fixture: ComponentFixture<JoiningsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoiningsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoiningsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
