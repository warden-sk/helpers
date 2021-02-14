"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Delete_1 = __importDefault(require("./Delete"));
const Insert_1 = __importDefault(require("./Insert"));
const Select_1 = __importDefault(require("./Select"));
const Table_1 = __importDefault(require("./Table"));
class SQL {
    static createTable(name, $) {
        const t = new Table_1.default();
        $(t);
        return `CREATE TABLE "${name}" (${t.toString()});`;
    }
    static delete(...$) {
        return new Delete_1.default(...$);
    }
    static dropTableIfExists(name) {
        return `DROP TABLE IF EXISTS "${name}" CASCADE;`;
    }
    static insert(...$) {
        return new Insert_1.default(...$);
    }
    static select(...$) {
        return new Select_1.default(...$);
    }
}
exports.default = SQL;
