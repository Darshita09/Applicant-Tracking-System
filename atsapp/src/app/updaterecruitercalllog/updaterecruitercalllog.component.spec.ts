import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterecruitercalllogComponent } from './updaterecruitercalllog.component';

describe('UpdaterecruitercalllogComponent', () => {
  let component: UpdaterecruitercalllogComponent;
  let fixture: ComponentFixture<UpdaterecruitercalllogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdaterecruitercalllogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdaterecruitercalllogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
