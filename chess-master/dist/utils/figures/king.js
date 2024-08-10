"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.king = void 0;
// *** KING *** //
const king = _ref => {
  var _board$currCol, _board$currCol2, _board$currRow, _board$currRow2, _board, _board2, _board3, _board4;
  let {
    board,
    player,
    currentRow,
    currentCol,
    notation,
    startFields
  } = _ref;
  const squaresArr = [];
  const currRow = Number(currentRow);
  const currCol = Number(currentCol);

  // down
  if (currRow + 1 <= 7 && ((_board$currCol = board[currRow + 1][currCol]) === null || _board$currCol === void 0 ? void 0 : _board$currCol[0]) !== player) squaresArr.push("".concat(currRow + 1, "-").concat(currCol));
  // up
  if (currRow - 1 >= 0 && ((_board$currCol2 = board[currRow - 1][currCol]) === null || _board$currCol2 === void 0 ? void 0 : _board$currCol2[0]) !== player) squaresArr.push("".concat(currRow - 1, "-").concat(currCol));
  // right
  if (currCol + 1 <= 7 && ((_board$currRow = board[currRow][currCol + 1]) === null || _board$currRow === void 0 ? void 0 : _board$currRow[0]) !== player) squaresArr.push("".concat(currRow, "-").concat(currCol + 1));
  // left
  if (currCol - 1 >= 0 && ((_board$currRow2 = board[currRow][currCol - 1]) === null || _board$currRow2 === void 0 ? void 0 : _board$currRow2[0]) !== player) squaresArr.push("".concat(currRow, "-").concat(currCol - 1));

  // down-right
  if (currRow + 1 <= 7 && currCol + 1 <= 7 && ((_board = board[currRow + 1][currCol + 1]) === null || _board === void 0 ? void 0 : _board[0]) !== player) squaresArr.push("".concat(currRow + 1, "-").concat(currCol + 1));

  // down-left
  if (currRow + 1 <= 7 && currCol - 1 >= 0 && ((_board2 = board[currRow + 1][currCol - 1]) === null || _board2 === void 0 ? void 0 : _board2[0]) !== player) squaresArr.push("".concat(currRow + 1, "-").concat(currCol - 1));

  // up-left
  if (currRow - 1 >= 0 && currCol - 1 >= 0 && ((_board3 = board[currRow - 1][currCol - 1]) === null || _board3 === void 0 ? void 0 : _board3[0]) !== player) squaresArr.push("".concat(currRow - 1, "-").concat(currCol - 1));

  // up-right
  if (currRow - 1 >= 0 && currCol + 1 <= 7 && ((_board4 = board[currRow - 1][currCol + 1]) === null || _board4 === void 0 ? void 0 : _board4[0]) !== player) squaresArr.push("".concat(currRow - 1, "-").concat(currCol + 1));

  // *** castling ***
  if (player === "W" && !notation.some((el, i) => i % 2 === 0 && el[1] === "K")) {
    // queen-side 0-0-0
    if (board[7][0] === "WR" && board[7][1] === null && board[7][2] === null && board[7][3] === null && !startFields.includes("R-70")) {
      squaresArr.push("".concat(7, "-", 0));
    }
    // kingside 0-0
    if (board[7][7] === "WR" && board[7][5] === null && board[7][6] === null && !startFields.includes("R-77")) {
      squaresArr.push("".concat(7, "-", 7));
    }
  } else if (player === "B" && !notation.some((el, i) => i % 2 !== 0 && el[1] === "K")) {
    // queen-side 0-0-0
    if (board[0][0] === "BR" && board[0][1] === null && board[0][2] === null && board[0][3] === null && !startFields.includes("R-00")) {
      squaresArr.push("".concat(0, "-", 0));
    }
    // kingside 0-0
    if (board[0][7] === "BR" && board[0][5] === null && board[0][6] === null && !startFields.includes("R-07")) {
      squaresArr.push("".concat(0, "-", 7));
    }
  }
  return squaresArr;
};
exports.king = king;