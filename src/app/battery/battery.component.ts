import { Component, OnInit, OnDestroy } from '@angular/core';
import { BatteryService } from './battery.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.scss']
})
export class BatteryComponent implements OnInit, OnDestroy {
  isOn: boolean;
  subscription: Subscription;

  constructor(private batteryService: BatteryService) {
    this.isOn = batteryService.isOn;
    this.subscription = batteryService.isOnChange.subscribe((isOn) => {
      this.isOn = isOn;
    });
  }
  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
