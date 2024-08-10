"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAppDispatch = exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _reactRedux = require("react-redux");
var _boardSlice = _interopRequireDefault(require("./slices/board/boardSlice"));
var _roomsSlice = _interopRequireDefault(require("./slices/rooms/roomsSlice"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const store = (0, _toolkit.configureStore)({
  reducer: {
    game: _boardSlice.default,
    room: _roomsSlice.default
  }
});
const useAppDispatch = () => (0, _reactRedux.useDispatch)();
exports.useAppDispatch = useAppDispatch;
var _default = exports.default = store;