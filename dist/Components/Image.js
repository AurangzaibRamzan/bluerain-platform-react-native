var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import RN from 'react-native';
import React from 'react';
export var Image = function (props) {
    var _a = props.styles, styles = _a === void 0 ? {} : _a, others = __rest(props, ["styles"]);
    var stylesheet;
    if (Array.isArray(styles)) {
        stylesheet = [];
        styles.forEach(function (style) { return stylesheet.push(RN.StyleSheet.create(style)); });
    }
    else {
        stylesheet = RN.StyleSheet.create(styles);
    }
    return React.createElement(RN.Image, __assign({ style: stylesheet }, others));
};
//# sourceMappingURL=Image.js.map