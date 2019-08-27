"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var isBlank = function isBlank(value) {
  var valueType = typeof value;

  if (value === undefined || value === null) {
    return true;
  } else if (valueType === "number" || valueType === "boolean") {
    if (Number.isNaN(value) || value === false) {
      return true;
    } else {
      return false;
    }
  } else if (typeof value.length !== "undefined") {
    if (/^[\s]*$/.test(value.toString())) {
      return true;
    }

    return value.length === 0;
  } else {
    for (var i in value) {
      if (value.hasOwnProperty(i)) {
        return false;
      }
    }
  }

  return true;
};

var _default = isBlank;
exports["default"] = _default;