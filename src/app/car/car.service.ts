import { Injectable } from '@angular/core';
import { BatteryService } from '../battery/battery.service';
import { MotorService } from '../motor/motor.service';
import { lg } from '../helper/log.helper';

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
    lg('Car : Starting', 'success');
    this.startMotor();
    this.startBattery();
    this.isOn = true;
    lg('Car : Started', 'success');
  }

  private onBatteryIsOnChange(isOn: boolean): void {
    if (isOn === false) {
      this.stop();
    }
  }

  private startBattery(): void {
    this.batteryService.start();
    this.batteryService.isOnChange.subscribe(
      this.onBatteryIsOnChange.bind(this)
    );
  }

  private onMotorIsOnChange(isOn: boolean): void {
    if (isOn === false) {
      this.stop();
    }
  }

  private startMotor(): void {
    this.motorService.start();
    this.motorService.isOnChange.subscribe(this.onMotorIsOnChange.bind(this));
  }

  public stop(): void {
    if (this.isOn === true) {
      lg('Car : Stopping', 'danger');
      // eslint-disable-next-line
      this.isOn = false;
      this.batteryService.stop();
      this.motorService.stop();
      lg('Car : Stopped', 'danger');
    }
  }

  public getIsOn(): boolean {
    return this.isOn;
  }
}
