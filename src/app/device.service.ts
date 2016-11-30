import { Injectable } from '@angular/core';

@Injectable()
export class DeviceService {


  constructor() { }

  devices: Device[] = [];

  lastId: number = 0;

  addDevice(device: Device): DeviceService {
    if (!device.id) {
      device.id = ++this.lastId;
    }
    this.devices.push(device);
    return this;
  }

  getAllDevices(): Devices[] {
	return this.devices;
  }

}
