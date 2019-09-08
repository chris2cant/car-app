import { Injectable } from '@angular/core';
import { Device } from '../device/device';

@Injectable({
  providedIn: 'root'
})
export class CarService extends Device {
  constructor() {
    super();
  }
}
