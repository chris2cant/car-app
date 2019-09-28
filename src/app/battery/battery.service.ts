import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { lg } from '../helper/log.helper';

@Injectable({
  providedIn: 'root'
})
export class BatteryService {
  public isOn: boolean;
  public isOnChange: Subject<boolean>;

  constructor() {
    this.isOn = false;
    this.isOnChange = new Subject<boolean>();
  }

  public start(): void {
    lg('Battery : Starting', 'success');
    this.isOn = true;
    this.isOnChange.next(this.isOn);
    // this.failed();
    lg('Battery : Started', 'success');
  }

  private failed() {
    lg('Battery : Failing', 'warning');
    setTimeout(() => {
      lg('Battery : Failed', 'warning');
      this.stop();
    }, 2000);
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
