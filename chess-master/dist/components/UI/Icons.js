"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rematch = exports.hands = exports.flag = exports.cup = exports.copy = exports.chessIcon = void 0;
var _gi = require("react-icons/gi");
var _bs = require("react-icons/bs");
var _io = require("react-icons/io5");
var _reactIcons = require("react-icons");
const changeIcon = function (icon, color) {
  let size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "40px";
  return /*#__PURE__*/React.createElement(_reactIcons.IconContext.Provider, {
    value: {
      color,
      size
    }
  }, icon);
};
const flag = color => changeIcon( /*#__PURE__*/React.createElement(_gi.GiFlyingFlag, null), color, "20px");
exports.flag = flag;
const hands = color => changeIcon( /*#__PURE__*/React.createElement(_gi.GiShakingHands, null), color, "20px");
exports.hands = hands;
const chessIcon = function () {
  let color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "white";
  let size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "40px";
  return changeIcon( /*#__PURE__*/React.createElement(_gi.GiEmptyChessboard, null), color, size);
};
exports.chessIcon = chessIcon;
const cup = exports.cup = changeIcon( /*#__PURE__*/React.createElement(_gi.GiTrophyCup, null), "white", "80px");
const rematch = exports.rematch = changeIcon( /*#__PURE__*/React.createElement(_bs.BsArrowRepeat, null), "white", "40px");
const copy = exports.copy = changeIcon( /*#__PURE__*/React.createElement(_io.IoCopy, null), "#ae88ff", "25px");