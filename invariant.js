/*
 * Copyright 2021 Marek Kobida
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function invariant(condition, message) {
        if (!condition) {
            throw new Error(message);
        }
    }
    exports.default = invariant;
});
