import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { Device } from '../device';

@Component({
  selector: 'app-device-app',
  templateUrl: './device-app.component.html',
  styleUrls: ['./device-app.component.css'],
  providers: [DeviceService]
})
export class DeviceAppComponent implements OnInit {

  constructor(private deviceService: DeviceService) { }

  devices: Device[] = [];
  selectedDevice: Device;

  device7 = new Device({
      id: 7,
      name: "Gym Entrance",
      functional: true,
      led: "Yellow",
      kineticCharging: true,
      solarCharging: false,
      externalTemp: -8,
      batteryDischarging: true,
      batteryHealth: 69,
      latitude: 0,
      longitude: 0,
      locationDescription: "Gym Entrance near Pavillion"
  });

  ngOnInit() {
      this.devices = this.deviceService.getAllDevices();
      this.selectedDevice = this.devices[0];
  }

  selectDevice(device: Device) {
      this.selectedDevice = device;
  }

  addDevice() {
	this.devices.push(this.device7);
  }

}
