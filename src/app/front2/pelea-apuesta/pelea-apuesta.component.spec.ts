import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeleaApuestaComponent } from './pelea-apuesta.component';

describe('PeleaApuestaComponent', () => {
  let component: PeleaApuestaComponent;
  let fixture: ComponentFixture<PeleaApuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeleaApuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeleaApuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
