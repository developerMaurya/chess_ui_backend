"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isActivePlayerSelectingPiece = void 0;
const isActivePlayerSelectingPiece = (state, currFigure) => state.activePlayer === (currFigure === null || currFigure === void 0 ? void 0 : currFigure[0]);
exports.isActivePlayerSelectingPiece = isActivePlayerSelectingPiece;