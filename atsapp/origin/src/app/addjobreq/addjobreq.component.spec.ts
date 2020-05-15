import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjobreqComponent } from './addjobreq.component';

describe('AddjobreqComponent', () => {
  let component: AddjobreqComponent;
  let fixture: ComponentFixture<AddjobreqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddjobreqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddjobreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
