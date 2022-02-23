import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cperiod2Component } from './cperiod2.component';

describe('Cperiod2Component', () => {
  let component: Cperiod2Component;
  let fixture: ComponentFixture<Cperiod2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cperiod2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cperiod2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
