import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MotorService } from './motor.service';

@Component({
  selector: 'app-motor',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.scss']
})
export class MotorComponent implements OnInit, OnDestroy {
  isOn: boolean;
  subscription: Subscription;

  constructor(private motorService: MotorService) {
    this.isOn = motorService.isOn;
    this.subscription = motorService.isOnChange.subscribe((isOn) => {
      this.isOn = isOn;
    });
  }
  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
