import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtsstartComponent } from './atsstart.component';

describe('AtsstartComponent', () => {
  let component: AtsstartComponent;
  let fixture: ComponentFixture<AtsstartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtsstartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtsstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
