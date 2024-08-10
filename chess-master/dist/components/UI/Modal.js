"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactDom = _interopRequireDefault(require("react-dom"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const Modal = _ref => {
  let {
    isShowing,
    hide,
    children
  } = _ref;
  return isShowing ? /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ModalOverlay, null), /*#__PURE__*/React.createElement(ModalWrapper, {
    className: "modal-wrapper",
    "aria-modal": true,
    "aria-hidden": true,
    tabIndex: -1,
    role: "dialog"
  }, /*#__PURE__*/React.createElement(ModalMain, null, /*#__PURE__*/React.createElement(ModalHeader, null, /*#__PURE__*/React.createElement(StyledButton, {
    type: "button",
    className: "modal-close-button",
    "data-dismiss": "modal",
    "aria-label": "Close",
    onClick: hide
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"))), /*#__PURE__*/React.createElement(ModalBody, null, children)))), document.body) : null;
};
const ModalOverlay = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1140;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n  opacity: 0.5;\n"])));
const ModalWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1150;\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  outline: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
const ModalMain = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  z-index: 100;\n  background: white;\n  position: relative;\n  margin: 30px auto;\n  max-width: 500px;\n  min-width: 400px;\n  padding: 1rem 0;\n\n  @media only screen and (max-width: 480px) {\n    max-width: 320px;\n    min-width: 250px;\n  }\n"])));
const ModalHeader = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n"])));
const ModalBody = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: black;\n  position: relative;\n  height: 100%;\n  width: 100%;\n"])));
const StyledButton = _styledComponents.default.button(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-size: 1.4rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  opacity: 0.3;\n  cursor: pointer;\n  border: none;\n  padding-right: 1rem;\n"])));
var _default = exports.default = Modal;