export class Device {
  IsOn: boolean;

  constructor() {
    this.IsOn = false;
  }

  public start(): void {
    this.IsOn = true;
  }

  public stop(): void {
    this.IsOn = false;
  }

  public getIsOn(): boolean {
    return this.IsOn;
  }
}
