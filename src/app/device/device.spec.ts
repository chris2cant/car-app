import { Device } from './device';

describe('Device', () => {
  let device: Device;

  beforeEach(() => {
    device = new Device();
  });
  it('should not be running by default', () => {
    expect(device.getIsOn()).toEqual(false);
  });

  describe('start', () => {
    it('should start the car', () => {
      device.start();
      expect(device.getIsOn()).toEqual(true);
    });
  });

  describe('stop', () => {
    it('should stop the car', () => {
      device.start();
      device.stop();
      expect(device.getIsOn()).toEqual(false);
    });
  });
});
