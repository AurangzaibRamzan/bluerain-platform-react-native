import RN from 'react-native';
var AsyncStorage = /** @class */ (function () {
    function AsyncStorage() {
    }
    AsyncStorage.prototype.setItem = function (key, value) {
        return RN.AsyncStorage.setItem(key, value);
    };
    AsyncStorage.prototype.getItem = function (key) {
        return RN.AsyncStorage.getItem(key);
    };
    AsyncStorage.prototype.removeItem = function (key) {
        return RN.AsyncStorage.removeItem(key);
    };
    AsyncStorage.prototype.clear = function () {
        return RN.AsyncStorage.clear();
    };
    AsyncStorage.prototype.multiGet = function (keys) {
        return RN.multiGet(keys);
    };
    AsyncStorage.prototype.multiSet = function (keyValuePairs) {
        return RN.multiSet(keyValuePairs);
    };
    AsyncStorage.prototype.mergeItem = function () {
        return RN.AsyncStorage.mergeItem();
    };
    AsyncStorage.prototype.getAllKeys = function () {
        throw new Error('getAllKeys property is yet to be implemented');
    };
    AsyncStorage.prototype.flushGetRequests = function () {
        throw new Error('flushGetRequests property is yet to be implemented');
    };
    AsyncStorage.prototype.multiMerge = function () {
        throw new Error('multiRemove property is yet to be implemented');
    };
    AsyncStorage.prototype.multiRemove = function () {
        throw new Error('multiRemove property is yet to be implemented');
    };
    return AsyncStorage;
}());
export { AsyncStorage };
//# sourceMappingURL=AsyncStorage.js.map