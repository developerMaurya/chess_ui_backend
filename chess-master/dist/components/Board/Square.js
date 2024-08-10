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
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
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
const isWithFigureProps = rest => {
  return rest.field !== undefined;
};
const Square = _ref => {
  let {
    color,
    isBlack,
    possibleMove,
    capturedFigures,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(SquareContainer, {
    color: color,
    onClick: () => {
      if (isWithFigureProps(rest)) {
        rest.handleClick(rest.fig, rest.field);
      } else {
        rest.handleClick(rest.fig);
      }
    },
    isBlack: isBlack
  }, rest.fig ? /*#__PURE__*/React.createElement(ImgStyled, {
    src: figures[rest.fig],
    alt: rest.fig
  }) : null, possibleMove ? /*#__PURE__*/React.createElement(Circle, null) : null, capturedFigures ? /*#__PURE__*/React.createElement(CapturedCircle, null) : null);
};
const SquareContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  width: 80px;\n  height: 80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  transform: ", ";\n\n  @media only screen and (max-width: 480px) {\n    width: 40px;\n    height: 40px;\n  }\n\n  @media only screen and (min-width: 481px) and (max-width: 1919px) {\n    width: 60px;\n    height: 60px;\n  }\n"])), props => props.color === "selected" ? "#abd88d" : props.color === "white" ? "#ffce9e" : "#d18b47", props => props.isBlack ? "rotate(180deg)" : "");
const Circle = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 25px;\n  width: 25px;\n  background: rgba(171, 216, 141, 0.4);\n  border-radius: 50%;\n\n  @media only screen and (max-width: 480px) {\n    width: 15px;\n    height: 15px;\n  }\n\n  @media only screen and (min-width: 481px) and (max-width: 1919px) {\n    width: 20px;\n    height: 20px;\n  }\n"])));
const CapturedCircle = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  border: 8px solid rgba(171, 216, 141, 0.4);\n  z-index: 100;\n  position: absolute;\n\n  @media only screen and (max-width: 480px) {\n    width: 20px;\n    height: 20px;\n    border: 5px solid rgba(171, 216, 141, 0.4);\n  }\n\n  @media only screen and (min-width: 481px) and (max-width: 1919px) {\n    width: 40px;\n    height: 40px;\n    border: 7px solid rgba(171, 216, 141, 0.4);\n  }\n"])));
const ImgStyled = _styledComponents.default.img(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  height: 80px;\n  width: 80px;\n\n  @media only screen and (max-width: 480px) {\n    width: 40px;\n    height: 40px;\n  }\n\n  @media only screen and (min-width: 481px) and (max-width: 1919px) {\n    width: 60px;\n    height: 60px;\n  }\n"])));
var _default = exports.default = Square;