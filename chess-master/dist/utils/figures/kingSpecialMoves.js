"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.kingSpecialMoves = void 0;
const kingSpecialMoves = _ref => {
  let {
    state,
    board,
    player,
    currentRow,
    currentCol,
    wanRow,
    wanCol
  } = _ref;
  // *** castling ***

  if (player === "W") {
    // queen-side 0-0-0
    if (currentRow === 7 && currentCol === 4 && wanRow === 7 && wanCol === 0) {
      board[7][2] = "WK";
      board[7][3] = "WR";
      board[7][0] = null;
      state.current.figure = "";
    }
    // kingside 0-0
    if (currentRow === 7 && currentCol === 4 && wanRow === 7 && wanCol === 7) {
      board[7][6] = "WK";
      board[7][5] = "WR";
      board[7][7] = null;
      state.current.figure = "";
    }
  } else if (player === "B") {
    // queen-side 0-0-0
    if (currentRow === 0 && currentCol === 4 && wanRow === 0 && wanCol === 0) {
      board[0][2] = "BK";
      board[0][3] = "BR";
      board[0][0] = null;
      state.current.figure = "";
    }
    // kingside 0-0
    if (currentRow === 0 && currentCol === 4 && wanRow === 0 && wanCol === 7) {
      board[0][6] = "BK";
      board[0][5] = "BR";
      board[0][7] = null;
      state.current.figure = "";
    }
  }
};
exports.kingSpecialMoves = kingSpecialMoves;