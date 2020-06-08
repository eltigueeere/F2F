import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosRectanguloComponent } from './eventos-rectangulo.component';

describe('EventosRectanguloComponent', () => {
  let component: EventosRectanguloComponent;
  let fixture: ComponentFixture<EventosRectanguloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosRectanguloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosRectanguloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
