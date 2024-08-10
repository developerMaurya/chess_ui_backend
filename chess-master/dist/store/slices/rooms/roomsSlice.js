"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startGame = exports.resetRoom = exports.joinRoom = exports.default = exports.createRoom = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _firebaseDb = require("../../../services/firebaseDb");
var _generateRandomPlayerColor = require("../../../utils/createGameHelpers/generateRandomPlayerColor");
var _generateRoomNum = require("../../../utils/createGameHelpers/generateRoomNum");
var _resetRoomState = require("../../../utils/gameFlowHelpers/resetRoomState");
const createRoom = exports.createRoom = (0, _toolkit.createAsyncThunk)("rooms/saveNewRoom", async (name, _ref) => {
  let {
    getState
  } = _ref;
  const state = getState();
  const game = state.game;
  const roomID = (0, _generateRoomNum.generateRoomNum)();
  const playerColorOne = (0, _generateRandomPlayerColor.generateRandomPlayerColor)();
  const room = {
    game,
    playerOne: {
      name,
      color: playerColorOne
    },
    status: "loading"
  };
  await _firebaseDb.database.ref("rooms/" + roomID).set(room);
  return {
    roomID,
    name,
    playerColorOne
  };
});
const joinRoom = exports.joinRoom = (0, _toolkit.createAsyncThunk)("rooms/joinToRoom", async _ref2 => {
  let {
    roomID,
    name
  } = _ref2;
  let playerColorOne;
  await _firebaseDb.database.ref("rooms/" + roomID + "/playerOne").once("value").then(snapshot => {
    playerColorOne = snapshot.val().color;
  });
  const playerColorTwo = playerColorOne === "W" ? "B" : "W";
  const updates = {
    playerTwo: {
      name,
      color: playerColorTwo
    },
    status: "started"
  };
  _firebaseDb.database.ref("rooms/" + roomID).update(updates);
  return {
    roomID,
    name,
    playerColorTwo
  };
});
const initialState = {
  roomID: null,
  status: null,
  color: null,
  name: null
};
const roomsSlice = (0, _toolkit.createSlice)({
  name: "room",
  initialState,
  reducers: {
    startGame(state) {
      state.status = "started";
    },
    resetRoom(state) {
      (0, _resetRoomState.resetRoomState)(state);
    }
  },
  extraReducers: builder => {
    builder.addCase(createRoom.pending, state => {
      state.status = "pending";
    }).addCase(createRoom.fulfilled, (state, action) => {
      const obj = action.payload;
      state.roomID = obj.roomID;
      state.name = obj.name;
      state.color = obj.playerColorOne;
      state.status = "loading";
    }).addCase(createRoom.rejected, state => {
      state.status = "error";
    }).addCase(joinRoom.pending, state => {
      state.status = "loading";
    }).addCase(joinRoom.fulfilled, (state, action) => {
      const obj = action.payload;
      state.roomID = obj.roomID;
      state.name = obj.name;
      state.color = obj.playerColorTwo;
      state.status = "started";
    }).addCase(joinRoom.rejected, state => {
      state.status = "error";
    });
  }
});
const {
  startGame,
  resetRoom
} = roomsSlice.actions;
exports.resetRoom = resetRoom;
exports.startGame = startGame;
var _default = exports.default = roomsSlice.reducer;