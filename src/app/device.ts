export class Device {
	id: number;
	name: string;
	functional: boolean = true;
	led: string;
	kineticCharging: boolean = false;
	solarCharging: boolean = false;
	externalTemp: number;
	batteryDischarging: boolean = true;
	batteryHealth: number;
	latitude: number;
	longitude: number;
	locationDescription: string;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	} 
}
