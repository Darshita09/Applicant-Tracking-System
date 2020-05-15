import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddleadcompanyComponent } from './addleadcompany.component';

describe('AddleadcompanyComponent', () => {
  let component: AddleadcompanyComponent;
  let fixture: ComponentFixture<AddleadcompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddleadcompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddleadcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
