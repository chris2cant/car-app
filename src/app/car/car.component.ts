import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  isRunning: boolean;

  constructor(private carService: CarService) {
    this.isRunning = false;
  }
  ngOnInit() {
    this.syncIsRunning();
  }

  public start(): void {
    this.carService.start();
    this.syncIsRunning();
  }

  public stop(): void {
    this.carService.stop();
    this.syncIsRunning();
  }

  private syncIsRunning(): void {
    this.isRunning = this.carService.getIsRunning();
  }
}
