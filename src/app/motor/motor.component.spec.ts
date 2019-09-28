import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorComponent } from './motor.component';
import { expectClassExist } from '../helper/spec.helper';

describe('MotorComponent', () => {
  let component: MotorComponent;
  let fixture: ComponentFixture<MotorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MotorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('HTML', () => {
    it('should have class .motor', () => {
      expectClassExist(expect, fixture, '.motor');
    });
  });
});
