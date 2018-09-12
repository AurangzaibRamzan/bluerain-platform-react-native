import { Linking as ILinking } from '@blueeast/bluerain-os';
import RN from 'react-native';
import SyncTasks from 'synctasks';

export class Linking implements ILinking {
  // getInitialURL(): SyncTasks.Promise<string> {
  // 	return RX.Linking.getInitialUrl();
  // }
	openURL(url: string): Promise<true> {
		return RN.canOpenURL(url);
	}
	canOpenURL(url: string): Promise<true> {
		return RN.canOpenURL(url);
	}
	getInitialURL(): string {

		return RN.getInitialURL();
	}
	launchSms(smsData: object): SyncTasks.Promise<void> {
		throw new Error('launchSms property needs to be implemented');
	}
	launchEmail(emailData: object): SyncTasks.Promise<void> {
		throw new Error('launchEmail property needs to be implemented');
	}
	addEventListener(): void {
		throw new Error('addEventListener property needs to be implemented');
	}
	removeEventListener(): void {
		throw new Error('removeEventListener property needs to be implemented');
	}


}