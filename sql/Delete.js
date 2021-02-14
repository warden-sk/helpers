"use strict";
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
var _from, _returning, _where;
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../Database"));
class Delete {
    constructor() {
        _from.set(this, void 0);
        _returning.set(this, void 0);
        _where.set(this, []);
    }
    from(tableName) {
        __classPrivateFieldSet(this, _from, tableName);
        return this;
    }
    returning(...columns) {
        __classPrivateFieldSet(this, _returning, columns);
        return this;
    }
    where(parameters) {
        Object.entries(Database_1.default.test2(parameters, Database_1.default.test4)).forEach(([columnName, parameter]) => __classPrivateFieldGet(this, _where).push(`${columnName} = ${Database_1.default.escape(parameter)}`));
        return this;
    }
    toString() {
        const sql = [];
        sql.push(`DELETE FROM "${__classPrivateFieldGet(this, _from)}"`);
        if (__classPrivateFieldGet(this, _where).length) {
            sql.push(`WHERE ${__classPrivateFieldGet(this, _where).join(' AND ')}`);
        }
        if (__classPrivateFieldGet(this, _returning)) {
            sql.push(`RETURNING ${__classPrivateFieldGet(this, _returning).length ? __classPrivateFieldGet(this, _returning).join() : '*'}`);
        }
        return `${sql.join(' ')};`;
    }
}
_from = new WeakMap(), _returning = new WeakMap(), _where = new WeakMap();
exports.default = Delete;
