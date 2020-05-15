import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitercalllogComponent } from './recruitercalllog.component';

describe('RecruitercalllogComponent', () => {
  let component: RecruitercalllogComponent;
  let fixture: ComponentFixture<RecruitercalllogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitercalllogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitercalllogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
