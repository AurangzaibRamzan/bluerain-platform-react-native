import { AppState as IAppState } from '@blueeast/bluerain-os';
import RN from 'react-native';

export class AppState implements IAppState {
	/**
	 * Add a handler to AppState changes by listening to the change event type and providing the handler
	 * It is supported in react-native only
	 */

	addEventListener(type: string, handler: () => void) {
		return RN.addEventListener(type,handler);
	}

	/**
	 * Remove a handler by passing the change event type and the handler
	 * It is supported in react-native only
	 */

	removeEventListener(type: string, handler: () => void) {
		return RN.removeEventListener(type,handler);

	}
}