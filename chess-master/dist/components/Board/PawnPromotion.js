"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _boardSlice = require("../../store/slices/board/boardSlice");
var _Square = _interopRequireDefault(require("./Square"));
var _store = require("../../store/store");
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const PawnPromotion = _ref => {
  let {
    color
  } = _ref;
  const dispatch = (0, _store.useAppDispatch)();
  const onClickHandler = fig => {
    const nameLetter = fig === null || fig === void 0 ? void 0 : fig[1];
    if (nameLetter) {
      dispatch((0, _boardSlice.promotePawnTo)(nameLetter));
    }
  };
  const arrWithFigures = color === "W" ? ["WB", "WN", "WQ", "WR"] : ["BB", "BN", "BQ", "BR"];
  return /*#__PURE__*/React.createElement(Container, null, arrWithFigures.map((el, i) => /*#__PURE__*/React.createElement(_Square.default, {
    key: el,
    fig: el,
    color: i % 2 === 0 ? "white" : "black",
    handleClick: onClickHandler
  })));
};
const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  position: absolute;\n  top: 2rem;\n  left: 10rem;\n\n  @media only screen and (max-width: 480px) {\n    top: 8rem;\n    z-index: 1000;\n  }\n"])));
var _default = exports.default = PawnPromotion;