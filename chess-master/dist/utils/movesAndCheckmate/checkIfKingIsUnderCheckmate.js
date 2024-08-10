"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkIfKingIsUnderCheckmate = void 0;
var _findAllMovesAllFigures = require("./findAllMovesAllFigures");
var _isCheckmate = require("./isCheckmate");
const checkIfKingIsUnderCheckmate = _ref => {
  let {
    board,
    player,
    notation,
    startFields
  } = _ref;
  // find all moves of opposite player
  const pawnDiagonal = true;
  const allPossibleMoves = (0, _findAllMovesAllFigures.findAllMovesAllFigures)({
    board,
    player,
    notation,
    pawnDiagonal,
    startFields
  });

  // check if active player KING is under checkmate
  const checkmated = (0, _isCheckmate.isCheckmate)({
    board,
    player,
    allPossibleMoves
  });
  //debugger;
  return checkmated;
};
exports.checkIfKingIsUnderCheckmate = checkIfKingIsUnderCheckmate;