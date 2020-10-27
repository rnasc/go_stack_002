"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _soma = require("./soma");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log('oi');
console.log((0, _soma.soma)(1, 3));
(0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement("h1", null, "Hello World"), document.getElementById('app'));
