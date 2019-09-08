import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MotorService {
  public isOn: boolean;
  constructor() {}

  public start(): void {
    this.isOn = true;
  }

  public stop(): void {
    this.isOn = false;
  }

  public getIsOn(): boolean {
    return this.isOn;
  }
}
