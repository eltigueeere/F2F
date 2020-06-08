import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarF2Component } from './navbar-f2.component';

describe('NavbarF2Component', () => {
  let component: NavbarF2Component;
  let fixture: ComponentFixture<NavbarF2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarF2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarF2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
