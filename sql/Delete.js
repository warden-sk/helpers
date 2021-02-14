"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../Database"));
class Delete {
    constructor() {
        this.#where = [];
    }
    #from;
    #returning;
    #where;
    from(tableName) {
        this.#from = tableName;
        return this;
    }
    returning(...columns) {
        this.#returning = columns;
        return this;
    }
    where(parameters) {
        Object.entries(Database_1.default.test2(parameters, Database_1.default.test4)).forEach(([columnName, parameter]) => this.#where.push(`${columnName} = ${Database_1.default.escape(parameter)}`));
        return this;
    }
    toString() {
        const sql = [];
        sql.push(`DELETE FROM "${this.#from}"`);
        if (this.#where.length) {
            sql.push(`WHERE ${this.#where.join(' AND ')}`);
        }
        if (this.#returning) {
            sql.push(`RETURNING ${this.#returning.length ? this.#returning.join() : '*'}`);
        }
        return `${sql.join(' ')};`;
    }
}
exports.default = Delete;
