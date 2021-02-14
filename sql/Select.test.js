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
        define(["require", "exports", "./Select", "assert", "../test"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Select_1 = __importDefault(require("./Select"));
    const assert_1 = __importDefault(require("assert"));
    const test_1 = require("../test");
    test_1.test('new Select()', async () => {
        const l = new Select_1.default().from('account');
        const r = 'SELECT * FROM "account";';
        assert_1.default.deepStrictEqual(l.toString(), r);
    });
    test_1.test('new Select\x1b[33m(Array)\x1b[0m', async () => {
        const l = new Select_1.default('first_name', 'last_name').from('account');
        const r = 'SELECT first_name,last_name FROM "account";';
        assert_1.default.deepStrictEqual(l.toString(), r);
    });
    test_1.test('Select.join()', async () => {
        const l = new Select_1.default().from('account').join('account_permission', 'account.id', 'account_permission.account_id');
        const r = 'SELECT * FROM "account" INNER JOIN "account_permission" ON account.id = account_permission.account_id;';
        assert_1.default.deepStrictEqual(l.toString(), r);
    });
    test_1.test('Select.where\x1b[33m(Object)\x1b[0m', async () => {
        const l = new Select_1.default().from('account').where({ first_name: 'Marek', last_name: 'Kobida' });
        const r = "SELECT * FROM \"account\" WHERE first_name = 'Marek' AND last_name = 'Kobida';";
        assert_1.default.deepStrictEqual(l.toString(), r);
    });
});
