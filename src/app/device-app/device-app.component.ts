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

  ngOnInit() {
      this.devices = this.deviceService.getAllDevices();
      this.selectedDevice = this.devices[0];
  }

  selectDevice(device: Device) {
      this.selectedDevice = device;
  }

}
