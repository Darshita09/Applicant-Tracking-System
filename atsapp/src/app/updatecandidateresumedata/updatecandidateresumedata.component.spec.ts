import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecandidateresumedataComponent } from './updatecandidateresumedata.component';

describe('UpdatecandidateresumedataComponent', () => {
  let component: UpdatecandidateresumedataComponent;
  let fixture: ComponentFixture<UpdatecandidateresumedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecandidateresumedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecandidateresumedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
