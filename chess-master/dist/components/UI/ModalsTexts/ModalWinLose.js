"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Icons = require("../Icons");
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const ModalWinLose = _ref => {
  let {
    winner,
    player,
    reason,
    handleRematch
  } = _ref;
  const message = winner ? "Congratulations, you won ".concat(player, "!") : "Sorry, ".concat(player, ", you lost the game...");
  const reasonText = winner ? reason === "checkmate" ? "You checkmated your opponent!" : "Your opponent decided to resign the game." : reason === "checkmate" ? "The opponent checkmated you." : "";
  return /*#__PURE__*/React.createElement(Container, {
    winner: winner
  }, winner ? _Icons.cup : null, /*#__PURE__*/React.createElement(Message, null, message), /*#__PURE__*/React.createElement("div", null, reasonText), /*#__PURE__*/React.createElement(Rematch, {
    onClick: handleRematch
  }, /*#__PURE__*/React.createElement("div", null, _Icons.rematch), /*#__PURE__*/React.createElement("div", null, "Rematch")));
};
const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-image: ", ";\n  clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0% 100%);\n  padding: 2rem 1rem;\n  width: 100%;\n  height: 100%;\n  color: white;\n"])), props => props.winner ? "linear-gradient(\n    to bottom,\n    rgba(66, 126, 96, 0.6),\n    rgba(53, 101, 77, 1)\n  )" : "linear-gradient(\n    to bottom,\n    rgba(247, 68, 63, 0.6),\n    rgba(151, 10, 6, 1)\n  )");
const Message = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: 1.2rem;\n  font-weight: bold;\n"])));
const Rematch = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  padding-top: 3rem;\n"])));
var _default = exports.default = ModalWinLose;