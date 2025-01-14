"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkValidity = void 0;
const checkValidity = (value, rules) => {
  let isValid = true;
  if (!rules) {
    return true;
  }
  if (rules.required) {
    isValid = (typeof value !== "number" ? value.trim() !== "" : value) && isValid;
  }
  if ("minLength" in rules && rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }
  if ("maxLength" in rules && rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }
  if ("length" in rules && rules.length) {
    isValid = value.length === rules.length && isValid;
  }
  return isValid;
};
exports.checkValidity = checkValidity;