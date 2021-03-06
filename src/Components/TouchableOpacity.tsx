import RN from 'react-native';
import React from 'react';

export const TouchableOpacity = (props) => {

	const { styles = {}, ...others } = props;

	let stylesheet;
	if (Array.isArray(styles)) {
		stylesheet = [];
		styles.forEach(style => stylesheet.push(RN.StyleSheet.create(style)));
	} else {
		stylesheet = RN.StyleSheet.create(styles);
	}

	return <RN.TouchableOpacity style={stylesheet}  {...others} />;
};