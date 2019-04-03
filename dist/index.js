var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ActivityIndicator, Button, CheckBox, FlatList, Image, Modal, Picker, ProgressBar, ScrollView, SectionList, Slider, StatusBar, SwitchToggle, Text, TextInput, TouchableOpacity, View, VirtualizedList, SafeAreaView, KeyboardAvoidingView } from './Components';
import { AppState, AsyncStorage, Clipboard, Dimensions, GeoLocation, Linking } from './apis';
import { Plugin } from '@blueeast/bluerain-os';
import Platform from './Platform';
import RN from 'react-native';
/**
 * Main React-native Plugin class.
 * @property {string} pluginName "ReactNative"
 * @property {string} slug "react-native"
 */
var ReactNative = /** @class */ (function (_super) {
    __extends(ReactNative, _super);
    function ReactNative() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReactNative.initialize = function (config, ctx) {
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
        ctx.Utils.setMainView = function (App) {
            RN.AppRegistry.registerComponent('MyApp', function () { return App; });
            RN.AppRegistry.runApplication('MyApp', { rootTag: document.getElementsByClassName('app-container')[0] });
        };
    };
    ReactNative.pluginName = 'ReactNative';
    ReactNative.slug = 'react-native';
    ReactNative.components = {
        // Registering Components
        ActivityIndicator: ActivityIndicator,
        Button: Button,
        CheckBox: CheckBox,
        Image: Image,
        FlatList: FlatList,
        Modal: Modal,
        Picker: Picker,
        ProgressBar: ProgressBar,
        ScrollView: ScrollView,
        SectionList: SectionList,
        Slider: Slider,
        StatusBar: StatusBar,
        SwitchToggle: SwitchToggle,
        Text: Text,
        TextInput: TextInput,
        TouchableOpacity: TouchableOpacity,
        SafeAreaView: SafeAreaView,
        View: View,
        VirtualizedList: VirtualizedList,
        KeyboardAvoidingView: KeyboardAvoidingView
    };
    return ReactNative;
}(Plugin));
export default ReactNative;
//# sourceMappingURL=index.js.map