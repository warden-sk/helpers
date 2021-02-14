"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = __importDefault(require("pg"));
class Database {
    constructor(uri) {
        this.uri = uri;
        this.#client = new pg_1.default.Pool({ connectionString: this.uri });
    }
    #client;
    // ?
    static escape(_1) {
        const _2 = [/CURRENT_TIMESTAMP/, /\(/];
        return _2.some(_3 => _3.test(_1)) ? _1 : `'${_1}'`;
    }
    // ?
    async query(_1) {
        const _2 = await this.#client.query(_1.toString());
        return Database.test1(_2.rows);
    }
    // ?
    static test1(_1) {
        return _1.map(_2 => this.test2(_2));
    }
    // ?
    static test2(_1, _2 = this.test3) {
        return Object.keys(_1).reduce((_3, _4) => ({ ..._3, [_2(_4)]: _1[_4] }), {});
    }
    // ?
    static test3(_1) {
        return _1.replace(/_([a-z])/g, (_2, _3) => _3.toUpperCase());
    }
    // ?
    static test4(_1) {
        return _1.replace(/([A-Z])/g, (_2, _3) => `_${_3.toLowerCase()}`);
    }
}
exports.default = Database;
