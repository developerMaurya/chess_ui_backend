"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeNotation = void 0;
const rows = [8, 7, 6, 5, 4, 3, 2, 1];
const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];
const writeNotation = _ref => {
  let {
    figure,
    r,
    c,
    captured,
    prevCol
  } = _ref;
  if (captured && figure && figure === "P") {
    return "".concat(cols[prevCol], "x").concat(cols[c]).concat(rows[r]);
  } else if (captured && figure !== "P") {
    return "".concat(figure, "x").concat(cols[c]).concat(rows[r]);
  } else if (!figure && (r === 0 && c === 0 || r === 7 && c === 0)) {
    return "0-0-0";
  } else if (!figure && (r === 0 && c === 7 || r === 7 && c === 7)) {
    return "0-0";
  }
  return "".concat(figure !== "P" ? figure : "").concat(cols[c]).concat(rows[r]);
};
exports.writeNotation = writeNotation;