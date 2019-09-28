import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { lg } from '../helper/log.helper';

@Injectable({
  providedIn: 'root'
})
export class MotorService {
  public isOn: boolean;
  public isOnChange: Subject<boolean>;

  constructor() {
    this.isOn = false;
    this.isOnChange = new Subject<boolean>();
  }

  public start(): void {
    lg('Motor : Starting', 'success');
    this.isOn = true;
    this.isOnChange.next(this.isOn);
    // this.failed();
    lg('Motor : Started', 'success');
  }

  public stop(): void {
    if (this.isOn === true) {
      lg('Motor : Stopping', 'danger');
      this.isOn = false;
      this.isOnChange.next(this.isOn);
      lg('Motor : Stopped', 'danger');
    }
  }

  private failed() {
    lg('Motor : Failing', 'warning');
    setTimeout(() => {
      lg('Motor : Failed', 'warning');
      this.stop();
    }, 2000);
  }

  public getIsOn(): boolean {
    return this.isOn;
  }
}
