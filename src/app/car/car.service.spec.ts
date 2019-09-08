import { TestBed } from '@angular/core/testing';

import { CarService } from './car.service';

describe('CarService', () => {
  let service: CarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(CarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not be running', () => {
    expect(service.isRunning).toEqual(false);
  });

  describe('start', () => {
    it('should start the car', () => {
      service.isRunning = false;
      service.start();
      expect(service.isRunning).toEqual(true);
    });
  });

  describe('stop', () => {
    it('should stop the car', () => {
      service.isRunning = true;
      service.stop();
      expect(service.isRunning).toEqual(false);
    });
  });

  describe('getIsRunning', () => {
    it('should return isRunning', () => {
      const isRunning = service.getIsRunning();
      expect(isRunning).toEqual(service.isRunning);
    });
  });
});
