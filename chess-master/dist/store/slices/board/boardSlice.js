"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectAndMoveFigure = exports.resetGame = exports.rematch = exports.promotePawnTo = exports.initialState = exports.gameEnd = exports.default = exports.addUpdatedGame = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _pawnSpecialMoves = require("../../../utils/figures/pawnSpecialMoves");
var _kingSpecialMoves = require("../../../utils/figures/kingSpecialMoves");
var _determineCurrentFigure = require("../../../utils/gameFlowHelpers/determineCurrentFigure");
var _determineRowAndCol = require("../../../utils/gameFlowHelpers/determineRowAndCol");
var _isPlayerClickingSameField = require("../../../utils/gameFlowHelpers/isPlayerClickingSameField");
var _isActivePlayerSelectingPiece = require("../../../utils/gameFlowHelpers/isActivePlayerSelectingPiece");
var _resettingStateToInitial = require("../../../utils/gameFlowHelpers/resettingStateToInitial");
var _resetStateForRematch = require("../../../utils/gameFlowHelpers/resetStateForRematch");
var _findPossibleMovesCurrFig = require("../../../utils/movesAndCheckmate/findPossibleMovesCurrFig");
var _writeNotation = require("../../../utils/gameFlowHelpers/writeNotation");
var _writeFieldFromWhichFigIsMoved = require("../../../utils/gameFlowHelpers/writeFieldFromWhichFigIsMoved");
const initialState = exports.initialState = {
  board: [["BR", "BN", "BB", "BQ", "BK", "BB", "BN", "BR"], ["BP", "BP", "BP", "BP", "BP", "BP", "BP", "BP"], [null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null], ["WP", "WP", "WP", "WP", "WP", "WP", "WP", "WP"], ["WR", "WN", "WB", "WQ", "WK", "WB", "WN", "WR"]],
  activePlayer: "W",
  activePlayerStatus: "selecting",
  current: {
    field: "",
    figure: ""
  },
  possibleMoves: [],
  notation: [],
  captured: {
    W: [],
    B: []
  },
  shouldPawnPromote: false,
  pawnPromotion: {
    W: "Q",
    B: "Q"
  },
  end: {
    isGameEnded: false,
    howIsGameEnded: "",
    // checkmate, resign
    winner: "",
    loser: "",
    isRematch: false
  }
};
const boardSlice = (0, _toolkit.createSlice)({
  name: "board",
  initialState,
  reducers: {
    selectAndMoveFigure: {
      reducer(state, action) {
        state.end.isRematch = false;
        const {
          currField,
          currFigure
        } = action.payload;

        // touch-move rule not applied - player select/deselect same field
        if ((0, _isPlayerClickingSameField.isPlayerClickingSameField)(state, currField)) {
          (0, _resettingStateToInitial.resettingStateToInitial)(state);

          // player selects the figure (1) and clicks on wanted field to place it (2):
        } else {
          // *** (1) selecting the figure ***
          if (state.activePlayerStatus === "selecting" && (0, _isActivePlayerSelectingPiece.isActivePlayerSelectingPiece)(state, currFigure)) {
            state.current.field = currField;
            state.current.figure = currFigure;
            state.activePlayerStatus = "moving";
            const [currRow, currCol] = (0, _determineRowAndCol.determineRowAndCol)(state.current.field);
            const figure = (0, _determineCurrentFigure.determineCurrentFigure)(state.current.figure);
            const arrWithAllFieldsFromFigsAreMoved = (0, _writeFieldFromWhichFigIsMoved.writeFieldFromWhichFigIsMoved)(figure, currRow, currCol);
            state.possibleMoves = (0, _findPossibleMovesCurrFig.findPossibleMovesCurrFig)({
              board: state.board,
              player: state.activePlayer,
              currFigure: currFigure,
              currField: currField,
              notation: state.notation,
              startFields: arrWithAllFieldsFromFigsAreMoved,
              isGameEnded: state.end.isGameEnded,
              state
            });
            if (currFigure === "WP" && currRow - 1 === 0) {
              state.shouldPawnPromote = true;
            }
            if (currFigure === "BP" && currRow + 1 === 7) {
              state.shouldPawnPromote = true;
            }
          }

          // *** (2) move the figure on the desired square ***
          const [currRow, currCol] = (0, _determineRowAndCol.determineRowAndCol)(state.current.field);
          const [wanRow, wanCol] = (0, _determineRowAndCol.determineRowAndCol)(currField);
          const figure = (0, _determineCurrentFigure.determineCurrentFigure)(state.current.figure);
          const arrWithAllFieldsFromFigsAreMoved = (0, _writeFieldFromWhichFigIsMoved.writeFieldFromWhichFigIsMoved)(figure, currRow, currCol);
          if (state.activePlayerStatus === "moving" && state.possibleMoves.includes(currField)) {
            const specialMovesArgObj = {
              state: state,
              board: state.board,
              player: state.activePlayer,
              currentRow: currRow,
              currentCol: currCol,
              wanRow,
              wanCol,
              notation: state.notation,
              startFields: arrWithAllFieldsFromFigsAreMoved
            };
            // special king move (castling)
            if (figure === "K") {
              (0, _kingSpecialMoves.kingSpecialMoves)(specialMovesArgObj);
            }
            // special pawn moves
            if (figure === "P") {
              (0, _pawnSpecialMoves.pawnSpecialMoves)(specialMovesArgObj);
            }
            // adding captured figures
            let captured;
            if (state.board[wanRow][wanCol]) {
              captured = state.board[wanRow][wanCol];
              if (captured) {
                state.captured[state.activePlayer].push(captured);
              }
              state.captured[state.activePlayer] = state.captured[state.activePlayer].filter(el => el !== null);
            }
            // write notation
            state.notation.push((0, _writeNotation.writeNotation)({
              figure: figure,
              r: Number(wanRow),
              c: Number(wanCol),
              captured: captured,
              prevCol: currCol
            }));
            if (state.current.figure !== "") {
              state.board[wanRow][wanCol] = state.current.figure;
            }
            state.board[currRow][currCol] = null;
            state.possibleMoves = [];
            state.activePlayerStatus = "selecting";
            state.activePlayer = state.activePlayer === "W" ? "B" : "W";
            state.current.field = "";
            state.shouldPawnPromote = false;
          }
        }
      },
      prepare(payload) {
        return {
          payload
        };
      }
    },
    promotePawnTo(state, action) {
      state.pawnPromotion[state.activePlayer] = action.payload;
    },
    gameEnd: {
      reducer(state, action) {
        const {
          howIsGameEnded,
          winner,
          loser
        } = action.payload;
        if (!state.end.isGameEnded) {
          state.end.isGameEnded = true;
          state.end.howIsGameEnded = howIsGameEnded;
          state.end.winner = winner;
          state.end.loser = loser;
        }
      },
      prepare(payload) {
        return {
          payload
        };
      }
    },
    rematch(state) {
      (0, _resetStateForRematch.resetStateForRematch)(state);
    },
    resetGame(state) {
      (0, _resetStateForRematch.resetStateForRematch)(state);
    },
    addUpdatedGame(state, action) {
      if (action.payload) {
        state.board = action.payload.board;
        state.activePlayer = action.payload.activePlayer;
        state.activePlayerStatus = action.payload.activePlayerStatus;
        state.current.field = action.payload.current.field;
        state.current.figure = action.payload.current.figure;
        state.possibleMoves = action.payload.possibleMoves;
        state.notation = action.payload.notation;
        state.captured["W"] = action.payload.captured["W"];
        state.captured["B"] = action.payload.captured["B"];
        state.shouldPawnPromote = action.payload.shouldPawnPromote;
        state.pawnPromotion["W"] = action.payload.pawnPromotion["W"];
        state.pawnPromotion["B"] = action.payload.pawnPromotion["B"];
        state.end.isGameEnded = action.payload.end.isGameEnded;
        state.end.howIsGameEnded = action.payload.end.howIsGameEnded;
        state.end.winner = action.payload.end.winner;
        state.end.loser = action.payload.end.loser;
        state.end.isRematch = action.payload.end.isRematch;
      }
    }
  }
});
const {
  selectAndMoveFigure,
  promotePawnTo,
  gameEnd,
  rematch,
  resetGame,
  addUpdatedGame
} = boardSlice.actions;
exports.addUpdatedGame = addUpdatedGame;
exports.resetGame = resetGame;
exports.rematch = rematch;
exports.gameEnd = gameEnd;
exports.promotePawnTo = promotePawnTo;
exports.selectAndMoveFigure = selectAndMoveFigure;
var _default = exports.default = boardSlice.reducer;