import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateresumedataComponent } from './candidateresumedata.component';

describe('CandidateresumedataComponent', () => {
  let component: CandidateresumedataComponent;
  let fixture: ComponentFixture<CandidateresumedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateresumedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateresumedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
