import { Injectable } from '@angular/core';
import { Device } from '../device/device';

@Injectable({
  providedIn: 'root'
})
export class BatteryService extends Device {
  constructor() {
    super();
  }
}
