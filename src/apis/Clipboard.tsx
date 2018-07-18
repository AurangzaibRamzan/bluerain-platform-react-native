import { Clipboard as IClipboard } from '@blueeast/bluerain-os';
import RN from 'react-native';
import SyncTasks from 'synctasks';

export class Clipboard implements IClipboard {
	getString(): SyncTasks.Promise<string> {
		return RN.getString();
	}

	setString(text: string): void {
		return RN.getString(text);
	}
}