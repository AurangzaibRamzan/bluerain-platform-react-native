import RN from 'react-native';
var AppState = /** @class */ (function () {
    function AppState() {
    }
    /**
     * Add a handler to AppState changes by listening to the change event type and providing the handler
     * It is supported in react-native only
     */
    AppState.prototype.addEventListener = function (type, handler) {
        return RN.addEventListener(type, handler);
    };
    /**
     * Remove a handler by passing the change event type and the handler
     * It is supported in react-native only
     */
    AppState.prototype.removeEventListener = function (type, handler) {
        return RN.removeEventListener(type, handler);
    };
    return AppState;
}());
export { AppState };
//# sourceMappingURL=AppState.js.map