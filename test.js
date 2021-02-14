"use strict";
/*
 * Copyright 2021 Marek Kobida
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.tests = exports.test = exports.t = void 0;
async function t(i, tests) {
    const test = tests[i];
    if (test) {
        const [testName, testFunction] = test;
        try {
            await testFunction();
            console.log(`${i + 1}. \x1b[32m${testName}\x1b[0m`);
            t(i + 1, tests);
        }
        catch (error) {
            console.log(`${i + 1}. \x1b[31m${testName}\x1b[0m`);
            console.error(error);
            process.exit(1);
        }
    }
    else {
        process.exit();
    }
}
exports.t = t;
function test(...test) {
    exports.tests[exports.tests.length] = test;
}
exports.test = test;
exports.tests = [];
