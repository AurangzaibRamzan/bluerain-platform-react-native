var GeoLocation = /** @class */ (function () {
    function GeoLocation() {
    }
    GeoLocation.prototype.getCurrentPosition = function (success, error, options) {
        return navigator.geolocation.getCurrentPosition(success, error, options);
    };
    GeoLocation.prototype.isAvailable = function () {
        throw new Error('It is yet to be implemented');
    };
    GeoLocation.prototype.clearWatch = function (watchID) {
        return navigator.geolocation.clearWatch(watchID);
    };
    GeoLocation.prototype.watchPosition = function (successCallback, errorCallback, options) {
        return navigator.geolocation.watchPosition(successCallback, errorCallback, options);
    };
    GeoLocation.prototype.stopObserving = function () {
        throw new Error('stopObserving is yet to be implemented');
    };
    GeoLocation.prototype.requestAuthorization = function () {
        throw new Error('requestAuthorization is yet to be implemented');
    };
    GeoLocation.prototype.setRNConfiguration = function (config) {
        throw new Error('setRNConfiguration is yet to be implemented');
    };
    return GeoLocation;
}());
export { GeoLocation };
//# sourceMappingURL=index.js.map