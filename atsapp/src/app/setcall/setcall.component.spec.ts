import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetcallComponent } from './setcall.component';

describe('SetcallComponent', () => {
  let component: SetcallComponent;
  let fixture: ComponentFixture<SetcallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetcallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetcallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
