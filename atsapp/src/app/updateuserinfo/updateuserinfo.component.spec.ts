import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateuserinfoComponent } from './updateuserinfo.component';

describe('UpdateuserinfoComponent', () => {
  let component: UpdateuserinfoComponent;
  let fixture: ComponentFixture<UpdateuserinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateuserinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateuserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
