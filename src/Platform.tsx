import { Platform as IPlatform } from '@blueeast/bluerain-os';
import isElectron from 'is-electron';
import RN from 'react-native';

export type PlatformOSType =
	| 'ios'
	| 'android'
	| 'macos'
	| 'windows'
	| 'web'
	| 'electron';

/**
 * This interface provides information about the OS or runtime platform on which the app is running.
 */
export default class Platform implements IPlatform {
	/**
	 * @return {string} PlatformOSType ('web' | 'server' | 'ios' | 'android' | 'windows' | 'electron')
	 */
	OS: PlatformOSType;
	constructor() {
		this.OS =
		RN.Platform.OS === 'web' && isElectron()
				? 'electron'
				: RN.Platform.OS;
	}
	select(data: object): any {
		return RN.Platform.select(data);
	}
}