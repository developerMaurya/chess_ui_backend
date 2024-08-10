"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const Input = _ref => {
  let {
    invalid,
    placeholder,
    formError,
    message,
    value,
    onInputChangeHandler
  } = _ref;
  const [isFocusRemoved, setIsFocusRemoved] = (0, _react.useState)(false);
  const handleBlur = () => {
    setIsFocusRemoved(true);
  };
  const renderError = errMessage => {
    if (invalid && isFocusRemoved || invalid && formError) {
      return /*#__PURE__*/React.createElement(ErrorMessage, null, errMessage);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, renderError(message), /*#__PURE__*/React.createElement(InputStyled, {
    type: "text",
    placeholder: placeholder,
    value: value,
    onChange: onInputChangeHandler,
    onBlur: handleBlur,
    required: true
  }));
};
const InputStyled = _styledComponents.default.input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  outline: none;\n  padding: 0.5rem;\n  margin-top: 0.5rem;\n  font-family: Poppins;\n  background-color: transparent;\n  outline: none;\n  color: white;\n  border-style: none;\n  border-bottom: 1px solid white;\n  font-size: 1.1rem;\n\n  &::placeholder {\n    color: rgba(255, 255, 255, 0.5);\n  }\n"])));
const ErrorMessage = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  outline: none;\n  margin-top: 0.5rem;\n  padding: 0 1rem;\n  text-align: center;\n  color: #000;\n  font-size: 0.6rem;\n"])));
var _default = exports.default = Input;