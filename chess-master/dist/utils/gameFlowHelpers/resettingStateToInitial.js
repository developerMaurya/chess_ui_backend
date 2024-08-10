"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resettingStateToInitial = void 0;
const resettingStateToInitial = state => {
  state.activePlayerStatus = "selecting";
  state.current.field = "";
  state.current.figure = "";
  state.possibleMoves = [];
};
exports.resettingStateToInitial = resettingStateToInitial;