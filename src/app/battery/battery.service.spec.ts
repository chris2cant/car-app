import { TestBed } from '@angular/core/testing';

import { BatteryService } from '../battery/battery.service';

describe('BatteryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BatteryService = TestBed.get(BatteryService);
    expect(service).toBeTruthy();
  });
});
