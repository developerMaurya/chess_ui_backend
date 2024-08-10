"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _BB = _interopRequireDefault(require("../../assets/img/BB.png"));
var _BK = _interopRequireDefault(require("../../assets/img/BK.png"));
var _BN = _interopRequireDefault(require("../../assets/img/BN.png"));
var _BP = _interopRequireDefault(require("../../assets/img/BP.png"));
var _BQ = _interopRequireDefault(require("../../assets/img/BQ.png"));
var _BR = _interopRequireDefault(require("../../assets/img/BR.png"));
var _WB = _interopRequireDefault(require("../../assets/img/WB.png"));
var _WK = _interopRequireDefault(require("../../assets/img/WK.png"));
var _WN = _interopRequireDefault(require("../../assets/img/WN.png"));
var _WP = _interopRequireDefault(require("../../assets/img/WP.png"));
var _WQ = _interopRequireDefault(require("../../assets/img/WQ.png"));
var _WR = _interopRequireDefault(require("../../assets/img/WR.png"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const figures = {
  BB: _BB.default,
  BK: _BK.default,
  BN: _BN.default,
  BP: _BP.default,
  BQ: _BQ.default,
  BR: _BR.default,
  WB: _WB.default,
  WK: _WK.default,
  WN: _WN.default,
  WP: _WP.default,
  WQ: _WQ.default,
  WR: _WR.default
};
const Player = _ref => {
  let {
    rotate,
    color,
    activePlayer,
    notation,
    capturedFigures,
    name,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(PlayerContainer, {
    rotate: rotate,
    color: color || undefined
  }, /*#__PURE__*/React.createElement(Box, {
    rotate: rotate,
    color: color || undefined,
    activePlayer: activePlayer
  }, /*#__PURE__*/React.createElement(MiniTitle, {
    color: color || undefined
  }, "Moves"), /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement("tbody", null, notation === null || notation === void 0 ? void 0 : notation.map((el, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement(TData, null, i + 1, "."), /*#__PURE__*/React.createElement(TData, null, el)))))), /*#__PURE__*/React.createElement(Box, {
    rotate: rotate,
    color: color || undefined,
    activePlayer: activePlayer
  }, /*#__PURE__*/React.createElement(MiniTitle, {
    color: color || undefined
  }, "Captured pieces"), /*#__PURE__*/React.createElement("div", null, capturedFigures === null || capturedFigures === void 0 ? void 0 : capturedFigures.map((el, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    width: "20px",
    height: "20px",
    src: figures[el],
    alt: el
  })))), /*#__PURE__*/React.createElement(CapturedMobile, null, capturedFigures === null || capturedFigures === void 0 ? void 0 : capturedFigures.map((el, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    width: "20px",
    height: "20px",
    src: figures[el],
    alt: el
  }))), /*#__PURE__*/React.createElement(MenuStyled, {
    rotate: rotate,
    color: color || undefined,
    activePlayer: activePlayer
  }, /*#__PURE__*/React.createElement(Title, {
    color: color || undefined,
    activePlayer: activePlayer
  }, name), children));
};
const PlayerContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: ", ";\n  align-items: ", ";\n  color: ", ";\n"])), props => props.rotate ? "column-reverse" : "column", props => props.rotate ? "flex-end" : "flex-start", props => props.color === "W" ? "white" : "black");
const MenuStyled = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  margin: 0.3rem 0;\n  width: 600px;\n  border: ", ";\n  flex-direction: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n\n  color: ", ";\n\n  @media only screen and (max-width: 480px) {\n    max-width: 300px;\n    padding: 0.5rem;\n  }\n"])), props => props.color === "W" ? "solid 1px rgba(255, 255, 255, 0.25)" : "solid 1px rgba(0, 0, 0, 0.25)", props => props.rotate ? "row-reverse" : "row", props => props.color === "W" ? props.activePlayer === "W" ? "rgba(250, 250, 250, 0.3)" : "rgba(255, 255, 255, 0.1)" : props.activePlayer === "B" ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.1)", props => props.color === "W" ? props.activePlayer === "W" ? "0px 0px 20px rgba(250, 250, 250, 0.3)" : "none" : props.activePlayer === "B" ? "0px 15px 20px rgba(0, 0, 0, 0.3)" : "none", props => props.color === "W" ? props.activePlayer === "W" ? "white" : "rgba(255, 255, 255, 0.3)" : props.activePlayer === "B" ? "black" : "rgba(0, 0, 0, 0.3)");
const Title = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 1.5rem;\n  font-weight: bold;\n\n  @media only screen and (max-width: 480px) {\n    font-size: 1.2rem;\n  }\n"])), props => props.color === "W" ? props.activePlayer === "W" ? "white" : "rgba(255, 255, 255, 0.3)" : props.activePlayer === "B" ? "black" : "rgba(0, 0, 0, 0.3)");
const MiniTitle = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-bottom: 0.5rem;\n  padding: 0.5rem;\n  border-bottom: ", ";\n\n  @media only screen and (max-width: 480px) {\n    display: none;\n  }\n"])), props => props.color === "W" ? "solid 1px rgba(255, 255, 255, 0.25)" : "solid 1px rgba(0, 0, 0, 0.25)");
const Box = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: 0.3rem 0;\n  font-weight: bold;\n  width: 300px;\n  min-height: 100px;\n  max-height: 200px;\n  overflow: scroll;\n  color: ", ";\n  border: ", ";\n\n  background-color: ", ";\n\n  box-shadow: ", ";\n\n  text-align: ", ";\n\n  @media only screen and (max-width: 480px) {\n    display: none;\n  }\n\n  @media only screen and (min-width: 481px) and (max-width: 1200px) {\n    width: 200px;\n  }\n"])), props => props.color === "W" ? props.activePlayer === "W" ? "white" : "rgba(255, 255, 255, 0.3)" : props.activePlayer === "B" ? "black" : "rgba(0, 0, 0, 0.3)", props => props.color === "W" ? "solid 1px rgba(255, 255, 255, 0.25)" : "solid 1px rgba(0, 0, 0, 0.25)", props => props.color === "W" ? props.activePlayer === "W" ? "rgba(250, 250, 250, 0.3)" : "rgba(255, 255, 255, 0.1)" : props.activePlayer === "B" ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.1)", props => props.color === "W" ? props.activePlayer === "W" ? "0px 0px 20px rgba(250, 250, 250, 0.3)" : "none" : props.activePlayer === "B" ? "0px 15px 20px rgba(0, 0, 0, 0.3)" : "none", props => props.rotate ? "right" : "left");
const CapturedMobile = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: none;\n\n  @media only screen and (max-width: 480px) {\n    display: block;\n  }\n"])));
const Table = _styledComponents.default.table(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: max-content;\n  display: grid;\n  grid-auto-flow: row;\n  grid-template-columns: repeat(2, 1fr);\n  grid-auto-rows: 1fr;\n"])));
const TData = _styledComponents.default.td(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  font-weight: normal;\n  font-size: 0.8rem;\n"])));
var _default = exports.default = Player;