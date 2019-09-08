export class Device {
  public isOn: boolean;

  constructor() {
    this.isOn = false;
  }

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
