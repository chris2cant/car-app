import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { BatteryComponent } from './battery/battery.component';
import { MotorComponent } from './motor/motor.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BatteryComponent,
    MotorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
