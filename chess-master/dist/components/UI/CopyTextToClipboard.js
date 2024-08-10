"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _reactRedux = require("react-redux");
var _reactCopyToClipboard = require("react-copy-to-clipboard");
var _Icons = require("./Icons");
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const CopyTextToClipboard = () => {
  const [copied, setCopied] = (0, _react.useState)(false);
  const {
    roomID
  } = (0, _reactRedux.useSelector)(state => state.room);
  return /*#__PURE__*/React.createElement("div", {
    className: "CopyTextToClipboard",
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(_reactCopyToClipboard.CopyToClipboard, {
    text: roomID || "",
    onCopy: () => setCopied(true)
  }, /*#__PURE__*/React.createElement(BtnStyled, null, _Icons.copy)), copied ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "red",
      fontSize: "0.7rem",
      position: "absolute",
      bottom: "50%",
      right: "20%"
    }
  }, "Copied!") : null);
};
const BtnStyled = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  outline: none;\n  border: none;\n  padding: 1rem;\n  background-color: #7433ff;\n  margin-left: 0.3rem;\n"])));
var _default = exports.default = CopyTextToClipboard;