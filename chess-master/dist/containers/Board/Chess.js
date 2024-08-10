"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _reactRedux = require("react-redux");
var _react = require("react");
var _Square = _interopRequireDefault(require("../../components/Board/Square"));
var _boardSlice = require("../../store/slices/board/boardSlice");
var _Player = _interopRequireDefault(require("../../components/Board/Player"));
var _firebaseDb = require("../../services/firebaseDb");
var _Menu = _interopRequireDefault(require("../../components/Board/Menu"));
var _useModal = _interopRequireDefault(require("../../hooks/useModal"));
var _Modal = _interopRequireDefault(require("../../components/UI/Modal"));
var _ModalWinLose = _interopRequireDefault(require("../../components/UI/ModalsTexts/ModalWinLose"));
var _PawnPromotion = _interopRequireDefault(require("../../components/Board/PawnPromotion"));
var _Logo = _interopRequireDefault(require("../../components/UI/Logo"));
var _roomsSlice = require("../../store/slices/rooms/roomsSlice");
var _store = require("../../store/store");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const Chess = () => {
  const dispatch = (0, _store.useAppDispatch)();
  const {
    board
  } = (0, _reactRedux.useSelector)(state => state.game);
  const {
    activePlayer
  } = (0, _reactRedux.useSelector)(state => state.game);
  const {
    possibleMoves
  } = (0, _reactRedux.useSelector)(state => state.game);
  const {
    field
  } = (0, _reactRedux.useSelector)(state => state.game.current);
  const [row, column] = field === null || field === void 0 ? void 0 : field.split("-");
  const {
    notation
  } = (0, _reactRedux.useSelector)(state => state.game);
  const notationWhite = notation === null || notation === void 0 ? void 0 : notation.filter((el, i) => i % 2 === 0);
  const notationBlack = notation === null || notation === void 0 ? void 0 : notation.filter((el, i) => i % 2 !== 0);
  const {
    captured
  } = (0, _reactRedux.useSelector)(state => state.game);
  const {
    shouldPawnPromote
  } = (0, _reactRedux.useSelector)(state => state.game);
  const {
    end
  } = (0, _reactRedux.useSelector)(state => state.game);
  const {
    isGameEnded
  } = end;
  const {
    isRematch
  } = end;
  const {
    isShowing,
    toggle
  } = (0, _useModal.default)();
  const {
    status
  } = (0, _reactRedux.useSelector)(state => state.room);
  const {
    roomID
  } = (0, _reactRedux.useSelector)(state => state.room);
  const {
    game
  } = (0, _reactRedux.useSelector)(state => state);
  const {
    color
  } = (0, _reactRedux.useSelector)(state => state.room);
  const oppositeColor = color === "W" ? "B" : "W";
  const [playerOne, setPlayerOne] = (0, _react.useState)({
    color: "",
    name: ""
  });
  const [playerTwo, setPlayerTwo] = (0, _react.useState)({
    color: "",
    name: ""
  });

  // read once players names from database
  (0, _react.useEffect)(() => {
    _firebaseDb.database.ref("rooms/" + roomID + "/playerOne").once("value").then(snapshot => {
      setPlayerOne(snapshot.val() || "Anonymous");
    });
    _firebaseDb.database.ref("rooms/" + roomID + "/playerTwo").once("value").then(snapshot => {
      setPlayerTwo(snapshot.val() || "Anonymous");
    });
  }, [roomID]);

  // listen all changes in game obj from firebase and dispatch action to update game obj in redux store
  (0, _react.useEffect)(() => {
    let gameRef = _firebaseDb.database.ref("rooms/" + roomID + "/game");
    gameRef.on("value", snapshot => {
      const data = snapshot.val();
      const gameObj = JSON.parse(data);
      dispatch((0, _boardSlice.addUpdatedGame)(gameObj));
    });
    return () => gameRef && gameRef.off();
  }, [status, roomID, dispatch]);

  // after all changes from players side on game obj, set it to firebase
  (0, _react.useEffect)(() => {
    const gameJSON = JSON.stringify(game);
    if (status === "started") {
      _firebaseDb.database.ref("rooms/" + roomID + "/game").set(gameJSON);
    }
  }, [game, roomID, status]);

  // open modal when isGameEnded is changed
  (0, _react.useEffect)(() => {
    if (isGameEnded) {
      toggle();
    }
  }, [isGameEnded, toggle]);

  // close modal when isRematch is changed
  (0, _react.useEffect)(() => {
    if (isRematch) {
      toggle();
    }
  }, [isRematch, toggle]);

  // on click dispatch actions in redux store to SELECT and MOVE figure (only allowed for active player)
  const onClickHandler = (fig, field) => {
    const currFigure = fig;
    const currField = field;
    if (activePlayer === color) {
      dispatch((0, _boardSlice.selectAndMoveFigure)({
        currFigure,
        currField
      }));
    }
  };

  // handle resign => dispatch action to update redux store
  const handleResign = () => {
    if (activePlayer === color) {
      const loser = activePlayer;
      const winner = activePlayer === "W" ? "B" : "W";
      dispatch((0, _boardSlice.gameEnd)({
        howIsGameEnded: "resign",
        winner,
        loser
      }));
    }
  };

  // handle rematch
  const handleRematch = () => {
    dispatch((0, _boardSlice.rematch)());
  };

  // handle reset
  const handleReset = () => {
    dispatch((0, _roomsSlice.resetRoom)());
    dispatch((0, _boardSlice.resetGame)());
  };
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(PlayerOne, null, /*#__PURE__*/React.createElement(_Player.default, {
    color: color,
    activePlayer: activePlayer,
    capturedFigures: color && (captured === null || captured === void 0 ? void 0 : captured[color]),
    notation: color === "W" ? notationWhite : notationBlack,
    name: playerOne.color === color ? playerOne.name : playerTwo.name
  }, /*#__PURE__*/React.createElement(_Menu.default, {
    color: color,
    activePlayer: activePlayer,
    resign: handleResign
  }))), /*#__PURE__*/React.createElement(ChessBoardContainer, {
    isBlack: color === "B"
  }, board === null || board === void 0 ? void 0 : board.map((el, i) => el.map((elem, j) => /*#__PURE__*/React.createElement(_Square.default, {
    key: "".concat(i, "-").concat(j),
    field: "".concat(i, "-").concat(j),
    isBlack: color === "B",
    color: Number(row) === i && Number(column) === j ? "selected" : (i + j) % 2 ? "white" : "black",
    possibleMove: possibleMoves === null || possibleMoves === void 0 ? void 0 : possibleMoves.map(element => element.split("-")).some(n => Number(n[0]) === i && Number(n[1]) === j),
    capturedFigures: possibleMoves === null || possibleMoves === void 0 ? void 0 : possibleMoves.map(element => element.split("-")).some(n => {
      var _board$i$j;
      return Number(n[0]) === i && Number(n[1]) === j && board[i][j] !== null && ((_board$i$j = board[i][j]) === null || _board$i$j === void 0 ? void 0 : _board$i$j[0]) !== activePlayer;
    }),
    fig: elem,
    handleClick: onClickHandler
  })))), /*#__PURE__*/React.createElement(PlayerTwo, null, /*#__PURE__*/React.createElement(_Player.default, {
    rotate: "true",
    color: oppositeColor,
    activePlayer: activePlayer,
    capturedFigures: captured === null || captured === void 0 ? void 0 : captured[oppositeColor],
    notation: color !== "W" ? notationWhite : notationBlack,
    name: playerOne.color === oppositeColor ? playerOne.name : playerTwo.name
  })), /*#__PURE__*/React.createElement(_Logo.default, {
    handleReset: handleReset
  }), activePlayer === color && shouldPawnPromote && possibleMoves.length !== 0 ? /*#__PURE__*/React.createElement(_PawnPromotion.default, {
    color: color
  }) : null, /*#__PURE__*/React.createElement(_Modal.default, {
    isShowing: isShowing,
    hide: toggle
  }, /*#__PURE__*/React.createElement("h2", null, "Game end"), /*#__PURE__*/React.createElement(_ModalWinLose.default, {
    handleRematch: handleRematch,
    reason: end.howIsGameEnded,
    winner: end.winner === color,
    player: playerOne.color === color ? playerOne.name : playerTwo.name
  })));
};
const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  position: relative;\n\n  @media only screen and (max-width: 480px) {\n    flex-direction: column-reverse;\n  }\n"])));
const ChessBoardContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  grid-auto-rows: 1fr;\n  justify-content: space-evenly;\n  margin: 30px;\n  z-index: 1000;\n  transform: ", ";\n"])), props => props.isBlack ? "rotate(180deg)" : "");
const PlayerOne = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 2rem;\n  left: 2rem;\n  z-index: 10;\n\n  @media only screen and (max-width: 480px) {\n    position: static;\n  }\n"])));
const PlayerTwo = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 2rem;\n  right: 2rem;\n  z-index: 10;\n\n  @media only screen and (max-width: 480px) {\n    position: static;\n    margin-top: 2.5rem;\n  }\n"])));
var _default = exports.default = Chess;