import { TestBed } from '@angular/core/testing';

import { BatteryService } from './battery.service';

describe('BatteryService', () => {
  let service: BatteryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(BatteryService);
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
