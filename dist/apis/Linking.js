import RN from 'react-native';
var Linking = /** @class */ (function () {
    function Linking() {
    }
    // getInitialURL(): SyncTasks.Promise<string> {
    // 	return RX.Linking.getInitialUrl();
    // }
    Linking.prototype.openURL = function (url) {
        return RN.canOpenURL(url);
    };
    Linking.prototype.canOpenURL = function (url) {
        return RN.canOpenURL(url);
    };
    Linking.prototype.getInitialURL = function () {
        return RN.getInitialURL();
    };
    Linking.prototype.launchSms = function (smsData) {
        throw new Error('launchSms property needs to be implemented');
    };
    Linking.prototype.launchEmail = function (emailData) {
        throw new Error('launchEmail property needs to be implemented');
    };
    Linking.prototype.addEventListener = function () {
        throw new Error('addEventListener property needs to be implemented');
    };
    Linking.prototype.removeEventListener = function () {
        throw new Error('removeEventListener property needs to be implemented');
    };
    return Linking;
}());
export { Linking };
//# sourceMappingURL=Linking.js.map