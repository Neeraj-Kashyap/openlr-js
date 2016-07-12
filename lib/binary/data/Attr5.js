'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BinaryInformation2 = require('./BinaryInformation');

var _BinaryInformation3 = _interopRequireDefault(_BinaryInformation2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Attr5 = function (_BinaryInformation) {
    _inherits(Attr5, _BinaryInformation);

    function Attr5() {
        _classCallCheck(this, Attr5);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Attr5).apply(this, arguments));
    }

    _createClass(Attr5, [{
        key: 'put',
        value: function put(bitStreamOutput) {
            bitStreamOutput.putBits(Attr5._RFU_VALUE, Attr5._NR_RFU);
            bitStreamOutput.putBits(this._frc, Attr5._FRC_BITS);
            bitStreamOutput.putBits(this._fow, Attr5._FOW_BITS);
        }
    }, {
        key: 'equals',
        value: function equals(otherAttr5) {
            return this._frc == otherAttr5._frc && this._fow == otherAttr5._fow;
        }
    }, {
        key: 'frc',
        get: function get() {
            return this._frc;
        }
    }, {
        key: 'fow',
        get: function get() {
            return this._fow;
        }
    }], [{
        key: 'fromValues',


        /** The functional road class information. */


        /** Number of bits used for frc */
        value: function fromValues(frc, fow) {
            var attr5 = new Attr5();
            attr5._frc = frc;
            attr5._fow = fow;
            return attr5;
        }

        /** The form of way information. */


        /** Number of bits used for fow */

        /** The Constant RFU. */

    }, {
        key: 'fromBitStreamInput',
        value: function fromBitStreamInput(bitStreamInput) {
            var rfu = bitStreamInput.getBits(Attr5._NR_RFU);
            if (rfu != Attr5._RFU_VALUE) {
                throw new Error('RFU in use');
            }
            var attr5 = new Attr5();
            attr5._frc = bitStreamInput.getBits(Attr5._DNP_BITS);
            attr5._fow = bitStreamInput.getBits(Attr5._FOW_BITS);
            return attr5;
        }
    }]);

    return Attr5;
}(_BinaryInformation3.default);

Attr5._NR_RFU = 2;
Attr5._FRC_BITS = 3;
Attr5._FOW_BITS = 3;
exports.default = Attr5;
;