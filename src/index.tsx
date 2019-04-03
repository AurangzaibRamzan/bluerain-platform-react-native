import {
	ActivityIndicator,
	Button, CheckBox,
	FlatList,
	Image, Modal,
	Picker,
	ProgressBar,
	ScrollView,
	SectionList
	, Slider,
	StatusBar,
	SwitchToggle,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	VirtualizedList,
	SafeAreaView,
	KeyboardAvoidingView
} from './Components';
import { AppState, AsyncStorage, Clipboard, Dimensions, GeoLocation, Linking } from './apis';
import BR, { BlueRain, Plugin } from '@blueeast/bluerain-os';
import Platform from './Platform';

import RN from 'react-native';
import React from 'react';

/**
 * Main React-native Plugin class.
 * @property {string} pluginName "ReactNative"
 * @property {string} slug "react-native"
 */

class ReactNative extends Plugin {
	static pluginName = 'ReactNative';
	static slug = 'react-native';
	static components = {

		// Registering Components
		ActivityIndicator,
		Button,
		CheckBox,
		Image,
		FlatList,
		Modal,
		Picker,
		ProgressBar,
		ScrollView,
		SectionList,
		Slider,
		StatusBar,
		SwitchToggle,
		Text,
		TextInput,
		TouchableOpacity,
		SafeAreaView,
		View,
		VirtualizedList,
		KeyboardAvoidingView

	};

	static initialize(config: {}, ctx: BlueRain) {

		// setting API's
		ctx.API.Clipboard = new Clipboard();
		ctx.API.Platform = new Platform();
		ctx.API.AppState = new AppState();
		ctx.API.Dimensions = new Dimensions();
		ctx.API.Linking = new Linking();
		ctx.API.GeoLocation = new GeoLocation();
		// 	ctx.API.NetInfo = new NetInfo;
		ctx.API.AsyncStorage = new AsyncStorage();

		// setMainView in Bluerain

		ctx.Utils.setMainView = (App) => {
			RN.AppRegistry.registerComponent('MyApp', () => App);
			RN.AppRegistry.runApplication('MyApp', { rootTag: document.getElementsByClassName('app-container')[0] });
		};

	}
}

export default ReactNative;
