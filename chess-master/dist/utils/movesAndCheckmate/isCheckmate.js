"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCheckmate = void 0;
const isCheckmate = _ref => {
  let {
    board,
    player,
    allPossibleMoves
  } = _ref;
  let kingPosition = "";
  board.forEach((el, row) => el.forEach((elem, col) => {
    if (elem === "".concat(player, "K")) {
      kingPosition = "".concat(row, "-").concat(col);
    }
  }));
  return allPossibleMoves.includes(kingPosition);
};
exports.isCheckmate = isCheckmate;