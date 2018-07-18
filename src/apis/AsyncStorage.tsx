import { AsyncStorage as IAsyncStorage } from '@blueeast/bluerain-os';
import RN from 'react-native';
import SyncTasks from 'synctasks';

export class AsyncStorage implements IAsyncStorage {


	setItem(key: string, value: string): object {
		return RN.AsyncStorage.setItem(key, value);
	}

	getItem(key: string): SyncTasks.Promise<string | undefined> {
		return RN.AsyncStorage.getItem(key);
	}
	removeItem(key: string) : object{
		return RN.AsyncStorage.removeItem(key);
	}
	clear(): SyncTasks.Promise<void> {
		return RN.AsyncStorage.clear();
	}

	multiGet(keys: string[]): object {

		return RN.multiGet(keys);
	}

	multiSet(keyValuePairs: string[][]): object {
		return RN.multiSet(keyValuePairs);
	}

	mergeItem() : void {
		return RN.AsyncStorage.mergeItem();
	}
	getAllKeys(): object {
		throw new Error('getAllKeys property is yet to be implemented');
	}

	flushGetRequests(): object {
		throw new Error('flushGetRequests property is yet to be implemented');
	}

	multiMerge(): object {
		throw new Error('multiRemove property is yet to be implemented');
	}

	multiRemove(): object {
		throw new Error('multiRemove property is yet to be implemented');
	}
}