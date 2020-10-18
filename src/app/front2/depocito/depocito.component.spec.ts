import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepocitoComponent } from './depocito.component';

describe('DepocitoComponent', () => {
  let component: DepocitoComponent;
  let fixture: ComponentFixture<DepocitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepocitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepocitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
