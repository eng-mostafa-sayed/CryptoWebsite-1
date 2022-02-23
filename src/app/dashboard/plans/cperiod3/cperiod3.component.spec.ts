import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cperiod3Component } from './cperiod3.component';

describe('Cperiod3Component', () => {
  let component: Cperiod3Component;
  let fixture: ComponentFixture<Cperiod3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cperiod3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cperiod3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
