"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRouterDom = require("react-router-dom");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Button = _interopRequireDefault(require("../components/UI/Button"));
var _Title = _interopRequireDefault(require("../components/UI/Title"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const Home = () => {
  return /*#__PURE__*/React.createElement(HomeContainer, {
    className: "Home"
  }, /*#__PURE__*/React.createElement(_Title.default, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/create-game"
  }, /*#__PURE__*/React.createElement(_Button.default, null, "Create game")), /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/join-game"
  }, /*#__PURE__*/React.createElement(_Button.default, null, "Join game"))));
};
const HomeContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));
var _default = exports.default = Home;