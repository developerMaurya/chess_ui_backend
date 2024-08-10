"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.knight = void 0;
// *** KNIGHT *** //
const knight = _ref => {
  var _board, _board2, _board3, _board4, _board5, _board6, _board7, _board8;
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
  if (currRow + 1 <= 7 && currCol + 2 <= 7 && ((_board = board[currRow + 1][currCol + 2]) === null || _board === void 0 ? void 0 : _board[0]) !== player) squaresArr.push("".concat(currRow + 1, "-").concat(currCol + 2));
  if (currRow + 2 <= 7 && currCol + 1 <= 7 && ((_board2 = board[currRow + 2][currCol + 1]) === null || _board2 === void 0 ? void 0 : _board2[0]) !== player) squaresArr.push("".concat(currRow + 2, "-").concat(currCol + 1));

  // down-left
  if (currRow + 2 <= 7 && currCol - 1 >= 0 && ((_board3 = board[currRow + 2][currCol - 1]) === null || _board3 === void 0 ? void 0 : _board3[0]) !== player) squaresArr.push("".concat(currRow + 2, "-").concat(currCol - 1));
  if (currRow + 1 <= 7 && currCol - 2 >= 0 && ((_board4 = board[currRow + 1][currCol - 2]) === null || _board4 === void 0 ? void 0 : _board4[0]) !== player) squaresArr.push("".concat(currRow + 1, "-").concat(currCol - 2));

  // up-left
  if (currRow - 2 >= 0 && currCol - 1 >= 0 && ((_board5 = board[currRow - 2][currCol - 1]) === null || _board5 === void 0 ? void 0 : _board5[0]) !== player) squaresArr.push("".concat(currRow - 2, "-").concat(currCol - 1));
  if (currRow - 1 >= 0 && currCol - 2 >= 0 && ((_board6 = board[currRow - 1][currCol - 2]) === null || _board6 === void 0 ? void 0 : _board6[0]) !== player) squaresArr.push("".concat(currRow - 1, "-").concat(currCol - 2));

  // up-left
  if (currRow - 2 >= 0 && currCol + 1 <= 7 && ((_board7 = board[currRow - 2][currCol + 1]) === null || _board7 === void 0 ? void 0 : _board7[0]) !== player) squaresArr.push("".concat(currRow - 2, "-").concat(currCol + 1));
  if (currRow - 1 >= 0 && currCol + 2 <= 7 && ((_board8 = board[currRow - 1][currCol + 2]) === null || _board8 === void 0 ? void 0 : _board8[0]) !== player) squaresArr.push("".concat(currRow - 1, "-").concat(currCol + 2));
  return squaresArr;
};
exports.knight = knight;