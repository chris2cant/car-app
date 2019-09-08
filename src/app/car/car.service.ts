import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  isRunning: boolean;

  constructor() {
    this.isRunning = false;
  }

  public start(): void {
    this.isRunning = true;
  }

  public stop(): void {
    this.isRunning = false;
  }

  public getIsRunning(): boolean {
    return this.isRunning;
  }
}
