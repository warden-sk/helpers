"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("./Database"));
const assert_1 = __importDefault(require("assert"));
const test_1 = require("./test");
test_1.test('Database.test1()', async () => {
    const l = Database_1.default.test1([{ date_of_birth: 890956800000, first_name: 'Marek', last_name: 'Kobida' }]);
    const r = [{ dateOfBirth: 890956800000, firstName: 'Marek', lastName: 'Kobida' }];
    assert_1.default.deepStrictEqual(l, r);
});
test_1.test('Database.test2()', async () => {
    const l = Database_1.default.test2({
        date_of_birth: 890956800000,
        first_name: 'Marek',
        last_name: 'Kobida',
    });
    const r = {
        dateOfBirth: 890956800000,
        firstName: 'Marek',
        lastName: 'Kobida',
    };
    assert_1.default.deepStrictEqual(l, r);
});
test_1.test('Database.test3()', async () => {
    const l = Database_1.default.test3('date_of_birth');
    const r = 'dateOfBirth';
    assert_1.default.deepStrictEqual(l, r);
});
