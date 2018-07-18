import { Dimensions as IDimensions } from '@blueeast/bluerain-os';
import RN from 'react-native';

export class Dimensions implements IDimensions {
	get(dim: 'window' | 'screen'): object {
		return RN.Dimensions.get(dim);
	}

	set(dimensions: {[key:string]: any}): object {
		return RN.Dimensions.set(dimensions);
	}

	addEventListener(): void {
		throw new Error('addEventListener property is yet to be implemented');
	}

	removeEventListener(): void {
		throw new Error('removeEventListener property is yet to be implemented');
	}
}