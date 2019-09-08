import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarComponent } from './car.component';
import { expectClassExist } from '../helper/spec.helper';
import { CarService } from './car.service';

describe('CarComponent', () => {
  let component: CarComponent;
  let fixture: ComponentFixture<CarComponent>;
  let carServiceStub: Partial<CarService>;
  let carService: CarService;
  carServiceStub = {
    start: () => {},
    stop: () => {},
    getIsOn: (): boolean => {
      return true;
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarComponent],
      providers: [{ provide: CarService, useValue: carServiceStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarComponent);
    carService = fixture.debugElement.injector.get(CarService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Actions', () => {
    it('should start the car service', () => {
      spyOn(carService, 'start');
      component.start();
      expect(carService.start).toHaveBeenCalled();
    });
    it('should start the car service', () => {
      spyOn(carService, 'stop');
      component.stop();
      expect(carService.stop).toHaveBeenCalled();
    });
    it('should call getIsOn after start', () => {
      spyOn(carService, 'getIsOn');
      component.start();
      expect(carService.getIsOn).toHaveBeenCalled();
    });
    it('should call getIsOn after stop', () => {
      spyOn(carService, 'getIsOn');
      component.stop();
      expect(carService.getIsOn).toHaveBeenCalled();
    });
  });

  describe('HTML', () => {
    it('Should have class .car', () => {
      expectClassExist(expect, fixture, '.car');
    });
    it('should display .car-running-status', () => {
      expectClassExist(expect, fixture, '.car-running-status');
    });
    it('should display .car-actions', () => {
      expectClassExist(expect, fixture, '.car-actions');
    });
    it('should display .car-action-start', () => {
      expectClassExist(expect, fixture, '.car-actions .car-action-start');
    });
    it('should display .car-action-stop', () => {
      expectClassExist(expect, fixture, '.car-actions .car-action-stop');
    });
  });
});
