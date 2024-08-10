"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Icons = require("./Icons");
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const Spinner = _ref => {
  let {
    showModal,
    children
  } = _ref;
  let renderInSpinner = /*#__PURE__*/React.createElement(Container, {
    className: "Loader"
  }, /*#__PURE__*/React.createElement(Load, null, (0, _Icons.chessIcon)()), /*#__PURE__*/React.createElement("div", null, "Waiting other player to join..."));
  if (showModal) {
    renderInSpinner = /*#__PURE__*/React.createElement(React.Fragment, null, children);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, renderInSpinner);
};
const pulse = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["{\n  0%   {transform: rotate(90deg);}\n  50%  {transform: rotate(180deg);}\n  100% {transform: rotate(360deg);}\n}"])));
const Load = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 1rem;\n  animation-name: ", ";\n  animation-duration: 3s;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n"])), pulse);
const Container = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
var _default = exports.default = Spinner;