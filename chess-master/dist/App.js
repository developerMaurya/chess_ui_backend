"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _globalStyle = require("./styles/globalStyle");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _reactRouterDom = require("react-router-dom");
var _Home = _interopRequireDefault(require("./containers/Home"));
var _CreateGame = _interopRequireDefault(require("./containers/CreateAndJoinGame/CreateGame"));
var _JoinGame = _interopRequireDefault(require("./containers/CreateAndJoinGame/JoinGame"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const App = () => {
  return /*#__PURE__*/React.createElement(_reactRouterDom.BrowserRouter, {
    basename: process.env.PUBLIC_URL
  }, /*#__PURE__*/React.createElement(AppContainer, null, /*#__PURE__*/React.createElement(_globalStyle.GlobalStyle, null), /*#__PURE__*/React.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/"
  }, /*#__PURE__*/React.createElement(_Home.default, null)), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/create-game"
  }, /*#__PURE__*/React.createElement(_CreateGame.default, null)), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/join-game"
  }, /*#__PURE__*/React.createElement(_JoinGame.default, null))), /*#__PURE__*/React.createElement(_reactRouterDom.Redirect, {
    to: "/"
  })));
};
const AppContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-image: radial-gradient(circle, #427e60, #35654d, #2a513e);\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var _default = exports.default = App;