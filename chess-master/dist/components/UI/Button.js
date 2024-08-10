"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const Button = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(ButtonStyled, {
    type: "submit"
  }, children);
};
const ButtonStyled = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-image: linear-gradient(to right, #d18b47, #b7722e);\n  color: white;\n  text-decoration: none;\n  text-align: center;\n  font-style: none;\n  font-family: Poppins;\n  min-width: 10rem;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  font-weight: bold;\n  border: none;\n  padding: 1rem 2rem;\n  border-radius: 0.4rem;\n  outline: none;\n  margin: 2.5rem;\n  &:hover {\n    box-shadow: \"0px 15px 20px rgba(209, 139, 71, 0.4)\";\n    transform: \"translateY(3px)\";\n  }\n"])));
var _default = exports.default = Button;