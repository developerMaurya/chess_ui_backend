"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rook = void 0;
// *** ROOK *** //
const rook = _ref => {
  let {
    board,
    player,
    currentRow,
    currentCol
  } = _ref;
  const squaresArr = [];
  const currRow = Number(currentRow);
  const currCol = Number(currentCol);

  // up
  for (let i = currRow - 1; i >= 0; i--) {
    var _board$i$currCol;
    if (board[i][currCol] !== null && ((_board$i$currCol = board[i][currCol]) === null || _board$i$currCol === void 0 ? void 0 : _board$i$currCol[0]) !== player) {
      squaresArr.push("".concat(i, "-").concat(currCol));
      break;
    }
    if (board[i][currCol] !== null) break;
    squaresArr.push("".concat(i, "-").concat(currCol));
  }
  // down
  for (let i = currRow + 1; i <= 7; i++) {
    var _board$i$currCol2;
    if (board[i][currCol] !== null && ((_board$i$currCol2 = board[i][currCol]) === null || _board$i$currCol2 === void 0 ? void 0 : _board$i$currCol2[0]) !== player) {
      squaresArr.push("".concat(i, "-").concat(currCol));
      break;
    }
    if (board[i][currCol] !== null) break;
    squaresArr.push("".concat(i, "-").concat(currCol));
  }
  // left
  for (let i = currCol - 1; i >= 0; i--) {
    var _board$currRow$i;
    if (board[currRow][i] !== null && ((_board$currRow$i = board[currRow][i]) === null || _board$currRow$i === void 0 ? void 0 : _board$currRow$i[0]) !== player) {
      squaresArr.push("".concat(currRow, "-").concat(i));
      break;
    }
    if (board[currRow][i] !== null) break;
    squaresArr.push("".concat(currRow, "-").concat(i));
  }
  // right
  for (let i = currCol + 1; i <= 7; i++) {
    var _board$currRow$i2;
    if (board[currRow][i] !== null && ((_board$currRow$i2 = board[currRow][i]) === null || _board$currRow$i2 === void 0 ? void 0 : _board$currRow$i2[0]) !== player) {
      squaresArr.push("".concat(currRow, "-").concat(i));
      break;
    }
    if (board[currRow][i] !== null) break;
    squaresArr.push("".concat(currRow, "-").concat(i));
  }
  return squaresArr;
};
exports.rook = rook;