import { Injectable } from '@angular/core';
import { Device } from '../device/device';
import { BatteryService } from '../battery/battery.service';
import { MotorService } from '../motor/motor.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  public isOn: boolean;
  constructor(
    private batteryService: BatteryService,
    private motorService: MotorService
  ) {
    this.isOn = false;
    console.warn('[motorService]', motorService);
  }

  public start(): void {
    // eslint-disable-next-line
    this.batteryService.start();
    this.motorService.start();
    this.isOn = true;
  }

  public stop(): void {
    this.isOn = false;
  }

  public getIsOn(): boolean {
    return this.isOn;
  }
}
