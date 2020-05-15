import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcandidateresumedataComponent } from './addcandidateresumedata.component';

describe('AddcandidateresumedataComponent', () => {
  let component: AddcandidateresumedataComponent;
  let fixture: ComponentFixture<AddcandidateresumedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcandidateresumedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcandidateresumedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
