import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterF2Component } from './footer-f2.component';

describe('FooterF2Component', () => {
  let component: FooterF2Component;
  let fixture: ComponentFixture<FooterF2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterF2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterF2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
