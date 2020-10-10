import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCrucesComponent } from './mis-cruces.component';

describe('MisCrucesComponent', () => {
  let component: MisCrucesComponent;
  let fixture: ComponentFixture<MisCrucesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisCrucesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisCrucesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
