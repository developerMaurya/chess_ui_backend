"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateRandomPlayerColor = void 0;
const generateRandomPlayerColor = () => {
  const randomNum = Math.floor(Math.random() * 2);
  return randomNum === 0 ? "W" : "B";
};
exports.generateRandomPlayerColor = generateRandomPlayerColor;