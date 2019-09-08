import { TestBed } from '@angular/core/testing';

import { MotorService } from './motor.service';

describe('MotorService', () => {
  let service: MotorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(MotorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('start', () => {
    it('should start the battery', () => {
      service.start();
      expect(service.getIsOn()).toEqual(true);
    });
  });

  describe('stop', () => {
    it('should stop the battery', () => {
      service.start();
      service.stop();
      expect(service.getIsOn()).toEqual(false);
    });
  });
});
