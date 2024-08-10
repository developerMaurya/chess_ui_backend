"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRouterDom = require("react-router-dom");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Icons = require("./Icons");
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const Logo = _ref => {
  let {
    handleReset
  } = _ref;
  return /*#__PURE__*/React.createElement(LinkStyled, {
    to: "/",
    onClick: handleReset
  }, /*#__PURE__*/React.createElement(LogoStyled, {
    onClick: handleReset
  }, /*#__PURE__*/React.createElement(ChessLogoIcon, {
    onClick: handleReset
  }, (0, _Icons.chessIcon)("white", "25px"), " "), "CHESS"));
};
const LogoStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: white;\n  font-size: 1.2rem;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n\n  @media only screen and (max-width: 480px) {\n    background-image: linear-gradient(to right, #7433ff, #7433ff, #ffa3fd);\n    width: 100%;\n  }\n"])));
const ChessLogoIcon = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  transform: rotate(135deg);\n  display: flex;\n  align-items: center;\n  padding: 0.5rem;\n"])));
const LinkStyled = (0, _styledComponents.default)(_reactRouterDom.Link)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 10px;\n  width: \"100%\";\n\n  @media only screen and (max-width: 480px) {\n    width: 100%;\n    padding: 0;\n  }\n"])));
var _default = exports.default = Logo;