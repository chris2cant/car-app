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

  describe('start', () => {
    it('should start the car', () => {
      service.start();
      expect(service.getIsOn()).toEqual(true);
    });
  });

  describe('stop', () => {
    it('should stop the car', () => {
      service.start();
      service.stop();
      expect(service.getIsOn()).toEqual(false);
    });
  });
});
