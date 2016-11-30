import { Injectable } from '@angular/core';
import { Device } from './device';

@Injectable()
export class DeviceService {


  constructor() { 
      this.devices.push(this.device1);
      this.devices.push(this.device2);
      this.devices.push(this.device3);
      this.devices.push(this.device4);
      this.devices.push(this.device5);
      this.devices.push(this.device6);
  }

  device1 = new Device({
      id: 1,
      name: "Library",
      functional: true,
      led: "Green",
      kineticCharging: true,
      solarCharging: false,
      externalTemp: -4,
      batteryDischarging: true,
      batteryHealth: 99,
      latitude: 0,
      longitude: 0,
      locationDescription: "Area in front of the library"
  });

  device2 = new Device({
      id: 2,
      name: "UA Northeast Doors",
      functional: true,
      led: "Yellow",
      kineticCharging: true,
      solarCharging: true,
      externalTemp: 10,
      batteryDischarging: true,
      batteryHealth: 99,
      latitude: 0,
      longitude: 0,
      locationDescription: "Northeast Doors of UA"
  });

  device3 = new Device({
      id: 3,
      name: "UA Southeast Doors",
      functional: false,
      led: "Red",
      kineticCharging: true,
      solarCharging: false,
      externalTemp: -6,
      batteryDischarging: true,
      batteryHealth: 99,
      latitude: 0,
      longitude: 0,
      locationDescription: "Southeast doors of UA"
  });

  device4 = new Device({
      id: 4,
      name: "UA East Stairway",
      functional: true,
      led: "Green",
      kineticCharging: false,
      solarCharging: true,
      externalTemp: -4,
      batteryDischarging: true,
      batteryHealth: 80,
      latitude: 0,
      longitude: 0,
      locationDescription: "Stairs on the east side of UA"
  });

  device5 = new Device({
      id: 5,
      name: "UB South Doors",
      functional: true,
      led: "Yellow",
      kineticCharging: true,
      solarCharging: true,
      externalTemp: 7,
      batteryDischarging: true,
      batteryHealth: 51,
      latitude: 0,
      longitude: 0,
      locationDescription: "South doors of UB"
  });

  device6 = new Device({
      id: 6,
      name: "UA Northeast Overhang",
      functional: true,
      led: "Green",
      kineticCharging: false,
      solarCharging: true,
      externalTemp: 4,
      batteryDischarging: true,
      batteryHealth: 88,
      latitude: 0,
      longitude: 0,
      locationDescription: "Overhang outside of the UA Northeast Entrance."
    });

  devices: Device[] = [];

  lastId: number = 1000;

  addDevice(device: Device): DeviceService {
    if (!device.id) {
      device.id = ++this.lastId;
    }
    this.devices.push(device);
    return this;
  }

  getAllDevices(): Device[] {
	return this.devices;
  }

}
