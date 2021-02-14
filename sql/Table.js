"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Column_1 = __importDefault(require("./Column"));
class Table {
    constructor() {
        this.#columns = [];
    }
    #columns;
    addColumn(column) {
        return (this.#columns = [...this.#columns, column]);
    }
    character(columnName, length) {
        const column = new Column_1.default(columnName).character(length);
        this.addColumn(column);
        return column;
    }
    characterVarying(columnName, length) {
        const column = new Column_1.default(columnName).characterVarying(length);
        this.addColumn(column);
        return column;
    }
    column(columnName) {
        const column = new Column_1.default(columnName);
        this.addColumn(column);
        return column;
    }
    createdAt() {
        const column = this.timestamp('created_at', true).default('CURRENT_TIMESTAMP').notNull();
        return column;
    }
    id() {
        const column = this.uuid('id').default('gen_random_uuid()').notNull().primaryKey();
        return column;
    }
    timestamp(columnName, withTimeZone) {
        const column = new Column_1.default(columnName).timestamp(withTimeZone);
        this.addColumn(column);
        return column;
    }
    uuid(columnName) {
        const column = new Column_1.default(columnName).uuid();
        this.addColumn(column);
        return column;
    }
    toString() {
        return this.#columns.join();
    }
}
exports.default = Table;
