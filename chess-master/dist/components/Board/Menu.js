"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Icons = require("../UI/Icons");
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const Menu = _ref => {
  let {
    color,
    activePlayer,
    resign
  } = _ref;
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Control, {
    onClick: resign
  }, (0, _Icons.flag)(color === "W" ? activePlayer === "W" ? "white" : "rgba(255, 255, 255, 0.3)" : activePlayer === "B" ? "black" : "rgba(0, 0, 0, 0.3)"), "resign"));
};
const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"])));
const Control = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-right: 1rem;\n  cursor: pointer;\n\n  @media only screen and (max-width: 480px) {\n    font-size: 0.8rem;\n  }\n"])));
var _default = exports.default = Menu;