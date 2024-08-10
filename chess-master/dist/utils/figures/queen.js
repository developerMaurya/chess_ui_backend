"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queen = void 0;
var _bishop = require("./bishop");
var _rook = require("./rook");
const queen = _ref => {
  let {
    board,
    player,
    currentRow,
    currentCol
  } = _ref;
  return [...(0, _rook.rook)({
    board,
    player,
    currentRow,
    currentCol
  }), ...(0, _bishop.bishop)({
    board,
    player,
    currentRow,
    currentCol
  })];
};
exports.queen = queen;