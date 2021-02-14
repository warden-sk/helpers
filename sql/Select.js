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
var _columns, _from, _leftJoin, _where;
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../Database"));
class Select {
    constructor(...columns) {
        _columns.set(this, []);
        _from.set(this, void 0);
        _leftJoin.set(this, void 0);
        _where.set(this, []);
        __classPrivateFieldSet(this, _columns, columns);
    }
    from(tableName) {
        __classPrivateFieldSet(this, _from, tableName);
        return this;
    }
    join(tableName, l, r) {
        __classPrivateFieldSet(this, _leftJoin, `INNER JOIN "${tableName}" ON ${l} = ${r}`);
        return this;
    }
    where(parameters) {
        Object.entries(Database_1.default.test2(parameters, Database_1.default.test4)).forEach(([columnName, parameter]) => __classPrivateFieldGet(this, _where).push(`${columnName} = ${Database_1.default.escape(parameter)}`));
        return this;
    }
    toString() {
        const sql = [];
        sql.push(`SELECT ${__classPrivateFieldGet(this, _columns).length ? __classPrivateFieldGet(this, _columns).join() : '*'}`);
        sql.push(`FROM "${__classPrivateFieldGet(this, _from)}"`);
        if (__classPrivateFieldGet(this, _leftJoin)) {
            sql.push(__classPrivateFieldGet(this, _leftJoin));
        }
        if (__classPrivateFieldGet(this, _where).length) {
            sql.push(`WHERE ${__classPrivateFieldGet(this, _where).join(' AND ')}`);
        }
        return `${sql.join(' ')};`;
    }
}
_columns = new WeakMap(), _from = new WeakMap(), _leftJoin = new WeakMap(), _where = new WeakMap();
exports.default = Select;
