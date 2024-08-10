"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findPossibleMovesCurrFig = void 0;
var _findAllMovesAllFigures = require("./findAllMovesAllFigures");
var _allMovingFiguresFns2 = _interopRequireDefault(require("../figures/allMovingFiguresFns"));
var _checkIfKingIsUnderCheckmate = require("./checkIfKingIsUnderCheckmate");
var _determineCurrentFigure = require("../gameFlowHelpers/determineCurrentFigure");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const findPossibleMovesCurrFig = _ref => {
  let {
    board,
    player,
    currFigure,
    currField,
    notation,
    startFields,
    isGameEnded,
    state
  } = _ref;
  const [currentRow, currentCol] = currField === null || currField === void 0 ? void 0 : currField.split("-").map(el => Number(el));
  const figure = (0, _determineCurrentFigure.determineCurrentFigure)(currFigure);

  // find all moves of opposite player
  //const pawnSpecialMoves = true;
  const allPossibleMoves = (0, _findAllMovesAllFigures.findAllMovesAllFigures)({
    board: board,
    player: player,
    notation: notation,
    //pawnSpecialMoves: pawnSpecialMoves,
    startFields: startFields
  });
  let possibleMovesCurrFig = [];

  // if figure is KING, it can move only on fields that not under attack of opposite figures
  if (figure === "K") {
    const newBoard = JSON.parse(JSON.stringify(board));
    newBoard[currentRow][currentCol] = null;
    const movesOfCurrFigureArray = _allMovingFiguresFns2.default["K"]({
      board: board,
      player: player,
      currentRow: currentRow,
      currentCol: currentCol,
      notation: notation,
      startFields: startFields
    }).filter(element => !allPossibleMoves.includes(element));
    const movesArray = [];
    movesOfCurrFigureArray.forEach(el => {
      const [row, col] = el === null || el === void 0 ? void 0 : el.split("-").map(el => Number(el));
      const updatedBoard = [];
      newBoard.forEach(elem => updatedBoard.push([...elem]));
      updatedBoard[row][col] = currFigure;
      if (!(0, _checkIfKingIsUnderCheckmate.checkIfKingIsUnderCheckmate)({
        board: updatedBoard,
        player,
        notation,
        startFields
      })) {
        movesArray.push(el);
      }
    });
    possibleMovesCurrFig = movesArray;

    // KING in check => GAME END
    if (possibleMovesCurrFig.length === 0 && !isGameEnded) {
      state.end.isGameEnded = true;
      state.end.howIsGameEnded = "checkmate";
      state.end.loser = player;
      state.end.winner = player === "W" ? "B" : "W";
    }

    // if is OTHER figure => two possibilities:
  } else {
    var _allMovingFiguresFns;
    // if moving of that figure would cause king to be checkmated, figure does not have possible moves // else only moves that would protect king
    const newBoard = JSON.parse(JSON.stringify(board));
    newBoard[currentRow][currentCol] = null;
    const movesOfCurrFigureArray = (_allMovingFiguresFns = _allMovingFiguresFns2.default[figure]({
      board: board,
      player: player,
      currentRow: currentRow,
      currentCol: currentCol,
      notation: notation,
      startFields: startFields
    })) === null || _allMovingFiguresFns === void 0 ? void 0 : _allMovingFiguresFns.filter(el => el !== "en passant" && el !== "pawn promotion");
    const movesArray = [];
    movesOfCurrFigureArray.forEach(el => {
      const [row, col] = el === null || el === void 0 ? void 0 : el.split("-").map(el => Number(el));
      const updatedBoard = [];
      newBoard.forEach(elem => updatedBoard.push([...elem]));
      updatedBoard[row][col] = currFigure;
      if (!(0, _checkIfKingIsUnderCheckmate.checkIfKingIsUnderCheckmate)({
        board: updatedBoard,
        player,
        notation,
        startFields
      })) {
        movesArray.push(el);
      }
    });
    possibleMovesCurrFig = movesArray;
  }
  return possibleMovesCurrFig;
};
exports.findPossibleMovesCurrFig = findPossibleMovesCurrFig;