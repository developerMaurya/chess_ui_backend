"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _bishop = require("./bishop");
var _king = require("./king");
var _knight = require("./knight");
var _pawn = require("./pawn");
var _queen = require("./queen");
var _rook = require("./rook");
const allMovingFiguresFns = {
  P: _pawn.pawn,
  R: _rook.rook,
  B: _bishop.bishop,
  Q: _queen.queen,
  N: _knight.knight,
  K: _king.king
};
var _default = exports.default = allMovingFiguresFns;