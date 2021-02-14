/*
 * Copyright 2021 Marek Kobida
 */

interface Tests {
  //           |- Test --------------------------------------------|
  [i: number]: [testName: string, testFunction: () => Promise<void>];
  length: number;
}

export async function t(i: number, tests: Tests): Promise<void> {
  const test = tests[i];

  if (test) {
    const [testName, testFunction] = test;

    try {
      await testFunction();

      console.log(`${i + 1}. \x1b[32m${testName}\x1b[0m`);

      t(i + 1, tests);
    } catch (error) {
      console.log(`${i + 1}. \x1b[31m${testName}\x1b[0m`);
      console.error(error);

      process.exit(1);
    }
  } else {
    process.exit();
  }
}

export function test(...test: Tests[0]): void {
  tests[tests.length] = test;
}

export const tests: Tests = [];
