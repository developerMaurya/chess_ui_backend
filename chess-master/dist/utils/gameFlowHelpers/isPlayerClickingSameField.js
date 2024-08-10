"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPlayerClickingSameField = void 0;
const isPlayerClickingSameField = (state, currField) => {
  return state.current.field === currField;
};
exports.isPlayerClickingSameField = isPlayerClickingSameField;