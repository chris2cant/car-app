import { TestBed } from '@angular/core/testing';

import { CarService } from './car.service';
import { BatteryService } from '../battery/battery.service';
import { MotorService } from '../motor/motor.service';
import { Subject } from 'rxjs';

describe('CarService', () => {
  let service: CarService;
  let batteryServiceStub: Partial<BatteryService>;
  let batteryService: BatteryService;
  let motorServiceStub: Partial<MotorService>;
  let motorService: MotorService;

  batteryServiceStub = {
    start: () => {},
    stop: () => {},
    isOnChange: new Subject<boolean>(),
    getIsOn: (): boolean => {
      return true;
    }
  };

  motorServiceStub = {
    start: () => {},
    stop: () => {},
    isOnChange: new Subject<boolean>(),
    getIsOn: (): boolean => {
      return true;
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: BatteryService, useValue: batteryServiceStub },
        { provide: MotorService, useValue: motorServiceStub }
      ]
    });
    service = TestBed.get(CarService);
    batteryService = TestBed.get(BatteryService);
    motorService = TestBed.get(MotorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('start', () => {
    it('should start the car', () => {
      service.start();
      expect(service.getIsOn()).toEqual(true);
    });
    it('should call to start de battery', () => {
      spyOn(batteryService, 'start');
      service.start();
      expect(batteryService.start).toHaveBeenCalled();
    });
    it('should call to start de motor', () => {
      spyOn(motorService, 'start');
      service.start();
      expect(motorService.start).toHaveBeenCalled();
    });
  });

  describe('stop', () => {
    it('should stop the car', () => {
      service.start();
      service.stop();
      expect(service.getIsOn()).toEqual(false);
    });
    it('should call to stop de battery', () => {
      service.isOn = true;
      spyOn(batteryService, 'stop');
      service.stop();
      expect(batteryService.stop).toHaveBeenCalled();
    });
    it('should call to stop de motor', () => {
      service.isOn = true;
      spyOn(motorService, 'stop');
      service.stop();
      expect(motorService.stop).toHaveBeenCalled();
    });
  });
});
