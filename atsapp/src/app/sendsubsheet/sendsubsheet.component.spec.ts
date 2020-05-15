import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendsubsheetComponent } from './sendsubsheet.component';

describe('SendsubsheetComponent', () => {
  let component: SendsubsheetComponent;
  let fixture: ComponentFixture<SendsubsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendsubsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendsubsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
