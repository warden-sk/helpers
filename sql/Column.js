/*
 * Copyright 2021 Marek Kobida
 */
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
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
    var _constraints, _type;
    Object.defineProperty(exports, "__esModule", { value: true });
    const Database_1 = __importDefault(require("../Database"));
    class Column {
        constructor(name) {
            this.name = name;
            _constraints.set(this, []);
            _type.set(this, void 0);
        }
        addConstraint(constraint) {
            return (__classPrivateFieldSet(this, _constraints, [...__classPrivateFieldGet(this, _constraints), constraint]));
        }
        character(length) {
            __classPrivateFieldSet(this, _type, `CHARACTER (${length})`);
            return this;
        }
        characterVarying(length) {
            __classPrivateFieldSet(this, _type, `CHARACTER VARYING (${length})`);
            return this;
        }
        default(parameter) {
            this.addConstraint(`DEFAULT ${Database_1.default.escape(parameter)}`);
            return this;
        }
        notNull() {
            this.addConstraint('NOT NULL');
            return this;
        }
        primaryKey() {
            this.addConstraint('PRIMARY KEY');
            return this;
        }
        references(tableName, columnName) {
            this.addConstraint(`REFERENCES "${tableName}" (${columnName})`);
            return this;
        }
        timestamp(withTimeZone) {
            if (withTimeZone) {
                __classPrivateFieldSet(this, _type, 'TIMESTAMP WITH TIME ZONE');
            }
            else {
                __classPrivateFieldSet(this, _type, 'TIMESTAMP');
            }
            return this;
        }
        unique() {
            this.addConstraint('UNIQUE');
            return this;
        }
        uuid() {
            __classPrivateFieldSet(this, _type, 'UUID');
            return this;
        }
        toString() {
            const sql = [this.name, __classPrivateFieldGet(this, _type), ...__classPrivateFieldGet(this, _constraints)];
            return sql.join(' ');
        }
    }
    _constraints = new WeakMap(), _type = new WeakMap();
    exports.default = Column;
});
