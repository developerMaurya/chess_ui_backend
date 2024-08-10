"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pawn = void 0;
// *** PAWN *** //
const pawn = _ref => {
  let {
    board,
    player,
    currentRow,
    currentCol,
    notation,
    pawnDiagonal,
    startFields
  } = _ref;
  let squaresArr = [];
  const currRow = Number(currentRow);
  const currCol = Number(currentCol);

  // WHITE
  if (player === "W") {
    var _board, _board2, _notation, _board$, _board$2;
    // pawn promotion
    if (currRow === 0) {
      squaresArr.push("pawn promotion");
    }

    // moving 1 field in front if that field is empty
    if (currRow - 1 >= 0 && (board === null || board === void 0 ? void 0 : board[currRow - 1][currCol]) === null) {
      squaresArr.push("".concat(currRow - 1, "-").concat(currCol));
    }

    // capturing black on diagonal
    if ((board === null || board === void 0 || (_board = board[currRow - 1]) === null || _board === void 0 || (_board = _board[currCol + 1]) === null || _board === void 0 ? void 0 : _board[0]) === "B" && currRow - 1 >= 0 && currCol + 1 <= 7) squaresArr.push("".concat(currRow - 1, "-").concat(currCol + 1));
    if ((board === null || board === void 0 || (_board2 = board[currRow - 1]) === null || _board2 === void 0 || (_board2 = _board2[currCol - 1]) === null || _board2 === void 0 ? void 0 : _board2[0]) === "B" && currRow - 1 >= 0 && currCol - 1 >= 0) squaresArr.push("".concat(currRow - 1, "-").concat(currCol - 1));

    // capturing pawnDiagonal - only to check KINGs moves and checkmate
    if (pawnDiagonal && currRow - 1 >= 0 && currCol - 1 >= 0 && currCol + 1 <= 7) {
      squaresArr.push("".concat(currRow - 1, "-").concat(currCol + 1));
      squaresArr.push("".concat(currRow - 1, "-").concat(currCol - 1));
    }
    // en passant
    const lastMoveRow = notation === null || notation === void 0 || (_notation = notation[notation.length - 1]) === null || _notation === void 0 ? void 0 : _notation[1];
    if (currRow === 3 && !startFields.includes("P-2".concat(currCol + 1)) && ((_board$ = board[3]) === null || _board$ === void 0 ? void 0 : _board$[currCol + 1]) === "BP" && Number(lastMoveRow) === 5) {
      squaresArr.push("".concat(currRow - 1, "-").concat(currCol + 1));
      squaresArr.push("en passant");
    }
    if (currRow === 3 && !startFields.includes("P-2".concat(currCol - 1)) && ((_board$2 = board[3]) === null || _board$2 === void 0 ? void 0 : _board$2[currCol - 1]) === "BP" && Number(lastMoveRow) === 5) {
      squaresArr.push("".concat(currRow - 1, "-").concat(currCol - 1));
      squaresArr.push("en passant");
    }

    // moving pawn for the first time - allowed to move one or two fields in front if both fields are empty
    if (currRow === 6 && board[5][currCol] === null && board[4][currCol] === null && !pawnDiagonal) squaresArr.push("".concat(currRow - 2, "-").concat(currCol));
  } else {
    var _board3, _board4, _board5, _notation2, _board$3, _board$4;
    // BLACK

    // pawn promotion
    if (currRow === 7) {
      squaresArr.push("pawn promotion");
    }

    // moving pawn for the first time - allowed to move one or two fields in front if both fields are empty
    if (currRow === 1 && board[2][currCol] === null && board[3][currCol] === null && !pawnDiagonal) {
      squaresArr.push("".concat(currRow + 2, "-").concat(currCol));
    }

    // moving 1 field in front if that field is empty
    if (currRow + 1 <= 7 && (board === null || board === void 0 || (_board3 = board[currRow + 1]) === null || _board3 === void 0 ? void 0 : _board3[currCol]) === null) {
      squaresArr.push("".concat(currRow + 1, "-").concat(currCol));
    }

    // capturing white on diagonal
    if ((board === null || board === void 0 || (_board4 = board[currRow + 1]) === null || _board4 === void 0 || (_board4 = _board4[currCol - 1]) === null || _board4 === void 0 ? void 0 : _board4[0]) === "W" && currRow + 1 <= 7 && currCol - 1 >= 0) squaresArr.push("".concat(currRow + 1, "-").concat(currCol - 1));
    if ((board === null || board === void 0 || (_board5 = board[currRow + 1]) === null || _board5 === void 0 || (_board5 = _board5[currCol + 1]) === null || _board5 === void 0 ? void 0 : _board5[0]) === "W" && currRow + 1 <= 7 && currCol + 1 <= 7) squaresArr.push("".concat(currRow + 1, "-").concat(currCol + 1));

    // capturing pawnDiagonal - only to check KINGs moves and checkmate
    if (pawnDiagonal && currRow + 1 <= 7 && currCol - 1 >= 0 && currCol + 1 <= 7) {
      squaresArr.push("".concat(currRow + 1, "-").concat(currCol - 1));
      squaresArr.push("".concat(currRow + 1, "-").concat(currCol + 1));
    }

    // en passant
    const lastMoveRow = notation === null || notation === void 0 || (_notation2 = notation[notation.length - 1]) === null || _notation2 === void 0 ? void 0 : _notation2[1];
    if (currRow === 4 && !startFields.includes("P-5".concat(currCol + 1)) && ((_board$3 = board[4]) === null || _board$3 === void 0 ? void 0 : _board$3[currCol + 1]) === "WP" && Number(lastMoveRow) === 4) {
      squaresArr.push("".concat(currRow + 1, "-").concat(currCol + 1));
      squaresArr.push("en passant");
    }
    if (currRow === 3 && !startFields.includes("P-5".concat(currCol - 1)) && ((_board$4 = board[4]) === null || _board$4 === void 0 ? void 0 : _board$4[currCol - 1]) === "WP" && Number(lastMoveRow) === 4) {
      squaresArr.push("".concat(currRow + 1, "-").concat(currCol - 1));
      squaresArr.push("en passant");
    }
  }
  return squaresArr;
};
exports.pawn = pawn;