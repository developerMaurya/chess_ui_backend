"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pawnSpecialMoves = void 0;
var _pawn = require("./pawn");
const pawnSpecialMoves = _ref => {
  let {
    state,
    board,
    player,
    currentRow,
    currentCol,
    wanRow,
    wanCol,
    notation,
    startFields
  } = _ref;
  const movingFigureArray = (0, _pawn.pawn)({
    board,
    player,
    currentRow,
    currentCol,
    notation,
    startFields
  });

  // en passant
  if (movingFigureArray.includes("en passant")) {
    const numForEnPassantMoving = player === "W" ? 1 : -1;
    const enPassantField = state.board[wanRow + numForEnPassantMoving][wanCol];
    if (enPassantField !== null) {
      state.captured[player].push(enPassantField);
    }
    state.board[wanRow + numForEnPassantMoving][wanCol] = null;
  }
  // pawn promotion
  const movingFigureArrayTwo = (0, _pawn.pawn)({
    board,
    player,
    currentRow: wanRow,
    currentCol: wanCol,
    notation,
    startFields
  });
  if (movingFigureArrayTwo.includes("pawn promotion")) {
    const fig = "".concat(player).concat(state.pawnPromotion[player]);
    state.current.figure = fig;
  }
};
exports.pawnSpecialMoves = pawnSpecialMoves;