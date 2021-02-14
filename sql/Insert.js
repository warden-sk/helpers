/*
 * Copyright 2021 Marek Kobida
 */
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Database"], factory);
    }
})(function (require, exports) {
    "use strict";
    var _returning;
    Object.defineProperty(exports, "__esModule", { value: true });
    const Database_1 = __importDefault(require("../Database"));
    class Insert {
        constructor(tableName, parameters) {
            this.tableName = tableName;
            this.parameters = parameters;
            _returning.set(this, void 0);
        }
        returning(...columns) {
            __classPrivateFieldSet(this, _returning, columns);
            return this;
        }
        toString() {
            const sql = [];
            sql.push(`INSERT INTO "${this.tableName}"`);
            const l = Object.keys(Database_1.default.test2(this.parameters, Database_1.default.test4));
            sql.push(`(${l.join()})`);
            const r = Object.values(this.parameters).map(parameter => Database_1.default.escape(parameter));
            sql.push(`VALUES (${r.join()})`);
            if (__classPrivateFieldGet(this, _returning)) {
                sql.push(`RETURNING ${__classPrivateFieldGet(this, _returning).length ? __classPrivateFieldGet(this, _returning).join() : '*'}`);
            }
            return `${sql.join(' ')};`;
        }
    }
    _returning = new WeakMap();
    exports.default = Insert;
});
