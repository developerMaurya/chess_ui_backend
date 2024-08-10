"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateRoomNum = void 0;
const generateRoomNum = function () {
  let length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
  return Math.random().toString(16).substr(2, length);
};
exports.generateRoomNum = generateRoomNum;