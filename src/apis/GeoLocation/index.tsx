
import { GeoLocation as IGeoLocation } from '@blueeast/bluerain-os';
import RN from 'react-native';

import SyncTasks from 'synctasks';

export class GeoLocation implements IGeoLocation {
	getCurrentPosition(Success:any) {
		return RN.Geolocation.getCurrentPosition(Success);
	}

	isAvailable(): boolean {
		throw new Error('It is yet to be implemented');
	}

	clearWatch(watchID: number): void {
		return RN.Geolocation.clearWatch(watchID);
	}
	watchPosition(
		successCallback: () => void,
		errorCallback?: () => void,
		options?: PositionOptions
	) {
		return RN.Geolocation.watchPosition(successCallback,errorCallback,options);
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