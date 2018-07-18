import RN from 'react-native-web';
import React from 'react';

export const VirtualizedList = (props) => {

	const { styles = {}, ...others } = props;

	let stylesheet;
	if (Array.isArray(styles)) {
		stylesheet = [];
		styles.forEach(style => stylesheet.push(RN.StyleSheet.create(style)));
	} else {
		stylesheet = RN.StyleSheet.create(styles);
	}

	return <RN.VirtualizedList style={stylesheet}  {...others} />;
};