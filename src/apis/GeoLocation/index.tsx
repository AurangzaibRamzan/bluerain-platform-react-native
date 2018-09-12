
import { GeoLocation as IGeoLocation } from '@blueeast/bluerain-os';
import SyncTasks from 'synctasks';

export class GeoLocation implements IGeoLocation {
	getCurrentPosition(success:any, error:any, options:any ) {
		return navigator.geolocation.getCurrentPosition(success, error, options);
	}

	isAvailable(): boolean {
		throw new Error('It is yet to be implemented');
	}

	clearWatch(watchID: number): void {
		return navigator.geolocation.clearWatch(watchID);
	}
	watchPosition(
		successCallback: () => void,
		errorCallback?: () => void,
		options?: PositionOptions
	) {
		return navigator.geolocation.watchPosition(successCallback,errorCallback,options);
	}
	stopObserving(): void {
		throw new Error('stopObserving is yet to be implemented');
	}

	requestAuthorization(): void {
		throw new Error('requestAuthorization is yet to be implemented');
	}

	setRNConfiguration(config: object): void {
		throw new Error('setRNConfiguration is yet to be implemented');
	}
}