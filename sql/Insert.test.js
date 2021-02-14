/*
 * Copyright 2021 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Insert", "assert", "../test"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Insert_1 = __importDefault(require("./Insert"));
    const assert_1 = __importDefault(require("assert"));
    const test_1 = require("../test");
    test_1.test('new Insert\x1b[33m(Object)\x1b[0m', async () => {
        const l = new Insert_1.default('account', {
            first_name: 'Marek',
            last_name: 'Kobida',
        });
        const r = "INSERT INTO \"account\" (first_name,last_name) VALUES ('Marek','Kobida');";
        assert_1.default.deepStrictEqual(l.toString(), r);
    });
    test_1.test('Insert.returning()', async () => {
        const l = new Insert_1.default('account', {
            first_name: 'Marek',
            last_name: 'Kobida',
        }).returning();
        const r = "INSERT INTO \"account\" (first_name,last_name) VALUES ('Marek','Kobida') RETURNING *;";
        assert_1.default.deepStrictEqual(l.toString(), r);
    });
    test_1.test('Insert.returning\x1b[33m(Array)\x1b[0m', async () => {
        const l = new Insert_1.default('account', {
            first_name: 'Marek',
            last_name: 'Kobida',
        }).returning('first_name', 'last_name');
        const r = "INSERT INTO \"account\" (first_name,last_name) VALUES ('Marek','Kobida') RETURNING first_name,last_name;";
        assert_1.default.deepStrictEqual(l.toString(), r);
    });
});
