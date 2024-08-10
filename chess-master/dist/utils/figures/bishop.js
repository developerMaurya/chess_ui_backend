"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bishop = void 0;
// *** BISHOP *** //
const bishop = _ref => {
  let {
    board,
    player,
    currentRow,
    currentCol
  } = _ref;
  const squaresArr = [];
  const currRow = Number(currentRow);
  const currCol = Number(currentCol);

  // down-right
  for (let i = 1; i <= 7 - Math.max(currRow, currCol); i++) {
    var _board;
    if (board[currRow + i][currCol + i] !== null && ((_board = board[currRow + i][currCol + i]) === null || _board === void 0 ? void 0 : _board[0]) !== player) {
      squaresArr.push("".concat(currRow + i, "-").concat(currCol + i));
      break;
    }
    if (board[currRow + i][currCol + i] !== null) break;
    squaresArr.push("".concat(currRow + i, "-").concat(currCol + i));
  }

  // down-left
  for (let i = 1; i <= Math.min(7 - currRow, currCol); i++) {
    var _board2;
    if (board[currRow + i][currCol - i] !== null && ((_board2 = board[currRow + i][currCol - i]) === null || _board2 === void 0 ? void 0 : _board2[0]) !== player) {
      squaresArr.push("".concat(currRow + i, "-").concat(currCol - i));
      break;
    }
    if (board[currRow + i][currCol - i] !== null) break;
    squaresArr.push("".concat(currRow + i, "-").concat(currCol - i));
  }
  for (let i = 1; i <= Math.min(currRow, currCol); i++) {
    var _board3;
    // up-left
    if (board[currRow - i][currCol - i] !== null && ((_board3 = board[currRow - i][currCol - i]) === null || _board3 === void 0 ? void 0 : _board3[0]) !== player) {
      squaresArr.push("".concat(currRow - i, "-").concat(currCol - i));
      break;
    }
    if (board[currRow - i][currCol - i] !== null) break;
    squaresArr.push("".concat(currRow - i, "-").concat(currCol - i));
  }

  // up-right
  for (let i = 1; i <= Math.min(currRow, 7 - currCol); i++) {
    var _board4;
    if (board[currRow - i][currCol + i] !== null && ((_board4 = board[currRow - i][currCol + i]) === null || _board4 === void 0 ? void 0 : _board4[0]) !== player) {
      squaresArr.push("".concat(currRow - i, "-").concat(currCol + i));
      break;
    }
    if (board[currRow - i][currCol + i] !== null) break;
    squaresArr.push("".concat(currRow - i, "-").concat(currCol + i));
  }
  return squaresArr;
};
exports.bishop = bishop;