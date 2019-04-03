import isElectron from 'is-electron';
import RN from 'react-native';
/**
 * This interface provides information about the OS or runtime platform on which the app is running.
 */
var Platform = /** @class */ (function () {
    function Platform() {
        this.OS =
            RN.Platform.OS === 'web' && isElectron()
                ? 'electron'
                : RN.Platform.OS;
    }
    Platform.prototype.select = function (data) {
        return RN.Platform.select(data);
    };
    return Platform;
}());
export default Platform;
//# sourceMappingURL=Platform.js.map