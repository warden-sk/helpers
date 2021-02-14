"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../Database"));
class Insert {
    constructor(tableName, parameters) {
        this.tableName = tableName;
        this.parameters = parameters;
    }
    #returning;
    returning(...columns) {
        this.#returning = columns;
        return this;
    }
    toString() {
        const sql = [];
        sql.push(`INSERT INTO "${this.tableName}"`);
        const l = Object.keys(Database_1.default.test2(this.parameters, Database_1.default.test4));
        sql.push(`(${l.join()})`);
        const r = Object.values(this.parameters).map(parameter => Database_1.default.escape(parameter));
        sql.push(`VALUES (${r.join()})`);
        if (this.#returning) {
            sql.push(`RETURNING ${this.#returning.length ? this.#returning.join() : '*'}`);
        }
        return `${sql.join(' ')};`;
    }
}
exports.default = Insert;
