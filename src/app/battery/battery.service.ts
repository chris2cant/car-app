import { Injectable } from '@angular/core';
import { Subject, interval } from 'rxjs';
import { lg } from '../helper/log.helper';

@Injectable({
  providedIn: 'root'
})
export class BatteryService {
  public isOn: boolean;
  public isOnChange: Subject<boolean>;
  public levelChange: Subject<number>;
  public level: number;

  constructor() {
    this.isOn = false;
    this.isOnChange = new Subject<boolean>();
    this.levelChange = new Subject<number>();
    this.level = 100;
  }

  private cycle = (): void => {
    this.decreaseBattery();
    if (this.level <= 0) {
      this.stop();
    }
  }

  private decreaseBattery = (): void => {
    if (this.level > 0) {
      this.level -= 10;
      lg(`Battery : Decrease level to ${this.level}`, 'warning');
      this.levelChange.next(this.level);
    }
  }

  public start(): void {
    lg('Battery : Starting', 'success');
    this.isOn = true;
    this.isOnChange.next(this.isOn);
    interval(1000).subscribe(this.cycle.bind(this));
    // this.failed();
    lg('Battery : Started', 'success');
  }

  public failed(): void {
    lg('Battery : Failing', 'warning');
    setTimeout(this.stop.bind(this), 2000);
  }

  public stop(): void {
    if (this.isOn === true) {
      lg('Battery : Stopping', 'danger');
      this.isOn = false;
      this.isOnChange.next(this.isOn);
      lg('Battery : Stopped', 'danger');
    }
  }

  public getIsOn(): boolean {
    return this.isOn;
  }
}
