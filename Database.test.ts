/*
 * Copyright 2021 Marek Kobida
 */

import Database from './Database';
import assert from 'assert';
import { test } from './test';

test('Database.test1()', async () => {
  const l = Database.test1([{ date_of_birth: 890956800000, first_name: 'Marek', last_name: 'Kobida' }]);

  const r = [{ dateOfBirth: 890956800000, firstName: 'Marek', lastName: 'Kobida' }];

  assert.deepStrictEqual(l, r);
});

test('Database.test2()', async () => {
  const l = Database.test2({
    date_of_birth: 890956800000,
    first_name: 'Marek',
    last_name: 'Kobida',
  });

  const r = {
    dateOfBirth: 890956800000,
    firstName: 'Marek',
    lastName: 'Kobida',
  };

  assert.deepStrictEqual(l, r);
});

test('Database.test3()', async () => {
  const l = Database.test3('date_of_birth');

  const r = 'dateOfBirth';

  assert.deepStrictEqual(l, r);
});
