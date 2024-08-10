"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _CopyTextToClipboard = _interopRequireDefault(require("../CopyTextToClipboard"));
var _Modal = _interopRequireDefault(require("../Modal"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const ModalRoomId = _ref => {
  let {
    isShowing,
    toggle,
    roomID
  } = _ref;
  return /*#__PURE__*/React.createElement(_Modal.default, {
    isShowing: isShowing,
    hide: toggle
  }, /*#__PURE__*/React.createElement("h2", null, "Invite your friend"), /*#__PURE__*/React.createElement(KeyCopy, null, /*#__PURE__*/React.createElement(Key, null, roomID), /*#__PURE__*/React.createElement(_CopyTextToClipboard.default, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 2rem"
    }
  }, "Share the secret key above, so your friend can join this game!"), /*#__PURE__*/React.createElement(ButtonStyle, {
    onClick: toggle
  }, "GOT IT"));
};
const Key = _styledComponents.default.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 1rem 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  font-weight: bold;\n  background-color: #7433ff;\n  color: #ae88ff;\n"])));
const KeyCopy = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 1rem 1.5rem;\n  margin-bottom: 2.5rem;\n"])));
const ButtonStyle = _styledComponents.default.button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  background-image: linear-gradient(to right, #d18b47, #b7722e);\n  color: white;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  font-weight: bold;\n  text-align: center;\n  border: none;\n  padding: 1rem 2rem;\n  border-radius: 0.4rem;\n  cursor: pointer;\n  outline: none;\n  margin: 2.5rem;\n  &:hover {\n    box-shadow: \"0px 15px 20px rgba(209, 139, 71, 0.4)\";\n    transform: \"translateY(3px)\";\n  }\n"])));
var _default = exports.default = ModalRoomId;