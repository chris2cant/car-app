import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  isOn: boolean;

  constructor(private carService: CarService) {
    this.isOn = false;
  }
  ngOnInit() {
    this.syncIsOn();
  }

  public start(): void {
    this.carService.start();
    this.syncIsOn();
  }

  public stop(): void {
    this.carService.stop();
    this.syncIsOn();
  }

  private syncIsOn(): void {
    this.isOn = this.carService.getIsOn();
  }
}
