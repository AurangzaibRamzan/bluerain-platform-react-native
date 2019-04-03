import RN from 'react-native';
var Dimensions = /** @class */ (function () {
    function Dimensions() {
    }
    Dimensions.prototype.get = function (dim) {
        return RN.Dimensions.get(dim);
    };
    Dimensions.prototype.set = function (dimensions) {
        return RN.Dimensions.set(dimensions);
    };
    Dimensions.prototype.addEventListener = function () {
        throw new Error('addEventListener property is yet to be implemented');
    };
    Dimensions.prototype.removeEventListener = function () {
        throw new Error('removeEventListener property is yet to be implemented');
    };
    return Dimensions;
}());
export { Dimensions };
//# sourceMappingURL=Dimensions.js.map