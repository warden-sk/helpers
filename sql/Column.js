"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../Database"));
class Column {
    constructor(name) {
        this.name = name;
        this.#constraints = [];
    }
    #constraints;
    #type;
    addConstraint(constraint) {
        return (this.#constraints = [...this.#constraints, constraint]);
    }
    character(length) {
        this.#type = `CHARACTER (${length})`;
        return this;
    }
    characterVarying(length) {
        this.#type = `CHARACTER VARYING (${length})`;
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
            this.#type = 'TIMESTAMP WITH TIME ZONE';
        }
        else {
            this.#type = 'TIMESTAMP';
        }
        return this;
    }
    unique() {
        this.addConstraint('UNIQUE');
        return this;
    }
    uuid() {
        this.#type = 'UUID';
        return this;
    }
    toString() {
        const sql = [this.name, this.#type, ...this.#constraints];
        return sql.join(' ');
    }
}
exports.default = Column;
