import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateleadcoComponent } from './updateleadco.component';

describe('UpdateleadcoComponent', () => {
  let component: UpdateleadcoComponent;
  let fixture: ComponentFixture<UpdateleadcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateleadcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateleadcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
