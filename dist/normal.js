"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global console */

var Normal = function () {
  /**
   * @param  {Number} mean  mean value
   * @param  {Number} stdev standard deviation
   */
  function Normal(mean, stdev) {
    _classCallCheck(this, Normal);

    this.mean = mean;
    this.stdev = stdev;
    this.standard = function () {
      var y2 = void 0;
      var useLast = false;
      var y1 = void 0;
      if (useLast) {
        y1 = y2;
        useLast = false;
      } else {
        var x1 = void 0,
            x2 = void 0,
            w = void 0;
        do {
          x1 = 2.0 * Math.random() - 1.0;
          x2 = 2.0 * Math.random() - 1.0;
          w = x1 * x1 + x2 * x2;
        } while (w >= 1.0);
        w = Math.sqrt(-2.0 * Math.log(w) / w);
        y1 = x1 * w;
        y2 = x2 * w;
        useLast = true;
      }

      var retval = mean + stdev * y1;
      if (retval > 0) return retval;
      return -retval;
    };
  }
  /**
   * Return single random number within the standard deviation of the mean value.
   * @return {Number}
   */


  _createClass(Normal, [{
    key: "value",
    value: function value() {
      return this.standard();
    }
    /**
     * Return an array of values within the standard deviation of the mean value.
     * @param  {Number} n array length
     * @return {array}
     */

  }, {
    key: "values",
    value: function values(n) {
      var i = void 0;
      var arr = [];
      for (i = 0; i < n; i++) {
        arr.push(this.standard());
      }
      return arr;
    }
  }]);

  return Normal;
}();

exports.default = Normal;
module.exports = exports["default"];