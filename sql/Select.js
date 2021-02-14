"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../Database"));
class Select {
    constructor(...columns) {
        this.#columns = [];
        this.#where = [];
        this.#columns = columns;
    }
    #columns;
    #from;
    #leftJoin;
    #where;
    from(tableName) {
        this.#from = tableName;
        return this;
    }
    join(tableName, l, r) {
        this.#leftJoin = `INNER JOIN "${tableName}" ON ${l} = ${r}`;
        return this;
    }
    where(parameters) {
        Object.entries(Database_1.default.test2(parameters, Database_1.default.test4)).forEach(([columnName, parameter]) => this.#where.push(`${columnName} = ${Database_1.default.escape(parameter)}`));
        return this;
    }
    toString() {
        const sql = [];
        sql.push(`SELECT ${this.#columns.length ? this.#columns.join() : '*'}`);
        sql.push(`FROM "${this.#from}"`);
        if (this.#leftJoin) {
            sql.push(this.#leftJoin);
        }
        if (this.#where.length) {
            sql.push(`WHERE ${this.#where.join(' AND ')}`);
        }
        return `${sql.join(' ')};`;
    }
}
exports.default = Select;
