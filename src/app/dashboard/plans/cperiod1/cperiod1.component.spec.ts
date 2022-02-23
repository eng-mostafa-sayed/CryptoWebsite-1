import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cperiod1Component } from './cperiod1.component';

describe('Cperiod1Component', () => {
  let component: Cperiod1Component;
  let fixture: ComponentFixture<Cperiod1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cperiod1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cperiod1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
