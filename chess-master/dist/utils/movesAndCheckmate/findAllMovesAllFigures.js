"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findAllMovesAllFigures = void 0;
var _allMovingFiguresFns = _interopRequireDefault(require("../figures/allMovingFiguresFns"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const findAllMovesAllFigures = _ref => {
  let {
    board,
    player,
    notation,
    pawnDiagonal,
    startFields
  } = _ref;
  const oppositePlayer = player === "W" ? "B" : "W";
  const allPossibleMoves = [];
  board.forEach((row, i) => row.forEach((elem, j) => {
    if (elem !== null && (elem === null || elem === void 0 ? void 0 : elem[0]) === oppositePlayer) {
      allPossibleMoves.push(..._allMovingFiguresFns.default[elem[1]]({
        board: board,
        player: oppositePlayer,
        currentRow: i,
        currentCol: j,
        notation: notation,
        pawnDiagonal: pawnDiagonal,
        startFields: startFields
      }));
    }
  }));
  // const allPossibleMoves: string[] = [];
  // board.forEach((row, i) =>
  //   row.forEach((elem, j) => {
  //     if (
  //       elem !== null &&
  //       elem?.[0] === oppositePlayer &&
  //       elem?.[1] === ("P" || "B" || "R" || "N" || "K" || "Q")
  //     ) {
  //       allPossibleMoves.push(
  //         ...allMovingFiguresFns[elem?.[1]]({
  //           board: board,
  //           player: oppositePlayer,
  //           currentRow: i,
  //           currentCol: j,
  //           notation: notation,
  //           pawnDiagonal: pawnDiagonal,
  //           startFields: startFields,
  //         })
  //       );
  //     }
  //   })
  // );

  // const allPossibleMoves = [];
  // board.forEach((row, i) =>
  //   row.forEach((elem, j) => {
  //     if (elem !== null && elem?.[0] === oppositePlayer) {
  //       allPossibleMoves.push(
  //         ...allMovingFiguresFns[elem?.[1]]({
  //           board: board,
  //           player: oppositePlayer,
  //           currentRow: i,
  //           currentCol: j,
  //           notation: notation,
  //           pawnDiagonal: pawnDiagonal,
  //           startFields: startFields,
  //         })
  //       );
  //     }
  //   })
  // );

  return Array.from(new Set(allPossibleMoves));
};
exports.findAllMovesAllFigures = findAllMovesAllFigures;