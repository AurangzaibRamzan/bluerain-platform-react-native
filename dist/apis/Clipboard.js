import RN from 'react-native';
var Clipboard = /** @class */ (function () {
    function Clipboard() {
    }
    Clipboard.prototype.getString = function () {
        return RN.getString();
    };
    Clipboard.prototype.setString = function (text) {
        return RN.getString(text);
    };
    return Clipboard;
}());
export { Clipboard };
//# sourceMappingURL=Clipboard.js.map