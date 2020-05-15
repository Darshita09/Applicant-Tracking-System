import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatejobreqComponent } from './updatejobreq.component';

describe('UpdatejobreqComponent', () => {
  let component: UpdatejobreqComponent;
  let fixture: ComponentFixture<UpdatejobreqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatejobreqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatejobreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
