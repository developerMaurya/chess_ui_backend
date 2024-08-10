"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeFieldFromWhichFigIsMoved = void 0;
const arrWithAllFieldsFromFigsAreMoved = [];
const writeFieldFromWhichFigIsMoved = (figure, r, c) => {
  figure && arrWithAllFieldsFromFigsAreMoved.push("".concat(figure, "-").concat(r).concat(c));
  return arrWithAllFieldsFromFigsAreMoved;
};
exports.writeFieldFromWhichFigIsMoved = writeFieldFromWhichFigIsMoved;