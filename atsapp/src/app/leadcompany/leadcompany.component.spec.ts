import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadcompanyComponent } from './leadcompany.component';

describe('LeadcompanyComponent', () => {
  let component: LeadcompanyComponent;
  let fixture: ComponentFixture<LeadcompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadcompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
