"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.determineRowAndCol = void 0;
const determineRowAndCol = currFig => {
  return currFig === null || currFig === void 0 ? void 0 : currFig.split("-").map(el => Number(el));
};
exports.determineRowAndCol = determineRowAndCol;