import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientcompanyComponent } from './clientcompany.component';

describe('ClientcompanyComponent', () => {
  let component: ClientcompanyComponent;
  let fixture: ComponentFixture<ClientcompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientcompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
