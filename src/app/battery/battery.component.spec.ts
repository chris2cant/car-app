import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryComponent } from './battery.component';
import { expectClassExist } from '../helper/spec.helper';

describe('BatteryComponent', () => {
  let component: BatteryComponent;
  let fixture: ComponentFixture<BatteryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BatteryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('HTML', () => {
    it('should have class .battery', () => {
      expectClassExist(expect, fixture, '.battery');
    });
  });
});
