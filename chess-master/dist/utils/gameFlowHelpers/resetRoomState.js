"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetRoomState = void 0;
const resetRoomState = state => {
  state.roomID = null;
  state.status = null;
  state.color = null;
  state.name = null;
};
exports.resetRoomState = resetRoomState;