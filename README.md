# bluerain-platform-react-native

It is used to provide react-native components and APis for your  native App using [react-native](https://facebook.github.io/react-native/)  .     [https://blueeast.gitbook.io/bluerain-platform-react-native](https://blueeast.gitbook.io/bluerain-platform-react-native)

## Installation

Run the following command in the plugin directoy:

```shell
yarn add  @blueeast/bluerain-platform-react-native
```

## Utils

It is used to  render MainView  of App

```react
import BR from '@blueeast/bluerain-os';
import RN from 'react-native';
BR.Utils.setMainView=(App) => {
    RN.AppRegistry.registerComponent('MyApp', () => App)
    RN.AppRegistry.runApplication('MyApp', { rootTag: document.getElementsByClassName('app-container') });
}
```

## Components

This plugin registers following components in the Component registry, so they can be reused later by other apps and plugins:

- ActivityIndicator [Native](https://facebook.github.io/react-native/docs/activityindicator)
- Button [Native](https://facebook.github.io/react-native/docs/button)
- Checkbox [Native](https://facebook.github.io/react-native/docs/switch)
- Image [Native](https://facebook.github.io/react-native/docs/image)
- KeyboardAvoidingView [Native](https://facebook.github.io/react-native/docs/keyboardavoidingview)
- Flatlist [Native](https://facebook.github.io/react-native/docs/flatlist)
- ListView [Native](https://facebook.github.io/react-native/docs/listview)
- Picker [Native](https://facebook.github.io/react-native/docs/picker)
- Modal [Native](https://facebook.github.io/react-native/docs/modal)
- ProgressBar  [Native](https://facebook.github.io/react-native/docs/progressbarandroid)
- RefreshControl [Native](https://facebook.github.io/react-native/docs/refreshcontrol)
- SafeAreaView [Native](https://facebook.github.io/react-native/docs/safeareaview)
- ScrollView [Native](https://facebook.github.io/react-native/docs/using-a-scrollview)
- SectionList [Native](https://facebook.github.io/react-native/docs/sectionlist)
- Slider [Native](https://facebook.github.io/react-native/docs/slider)
- StatusBar [Native](https://facebook.github.io/react-native/docs/statusbar)
- Switch [Native](https://facebook.github.io/react-native/docs/switch)
- Text [Native](https://facebook.github.io/react-native/docs/text)
- TextInput [Native](https://facebook.github.io/react-native/docs/textinput)
- Touchable [Native](https://facebook.github.io/react-native/docs/touchablehighlight)
- View [Native](https://facebook.github.io/react-native/docs/view)


## APIs

- Clipboard [Native](https://facebook.github.io/react-native/docs/clipboard)
- Platform [Native](https://facebook.github.io/react-native/docs/platform-specific-code)
- AppState [Native](https://facebook.github.io/react-native/docs/appstate)
- Dimensions [Native](https://facebook.github.io/react-native/docs/dimensions)
- Linking [Native](https://facebook.github.io/react-native/docs/linking)
- NetInfo [Native](https://facebook.github.io/react-native/docs/netinfo)
- Stylesheet [Native](https://facebook.github.io/react-native/docs/stylesheet)

### ReactNativePlugin

### **Extends [Plugin](https://blueeast.gitbook.io/bluerain-os/api/api-reference#plugin)**

ReactNative Plugin

### **Properties**

- `pluginName` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** "ReactNative"
- `slug` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** "react-native"
