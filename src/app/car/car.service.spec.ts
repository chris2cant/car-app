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
});
