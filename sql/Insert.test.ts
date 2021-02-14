/*
 * Copyright 2021 Marek Kobida
 */

import Insert from './Insert';
import assert from 'assert';
import { test } from '../test';

test('new Insert\x1b[33m(Object)\x1b[0m', async () => {
  const l = new Insert('account', {
    first_name: 'Marek',
    last_name: 'Kobida',
  });

  const r = "INSERT INTO \"account\" (first_name,last_name) VALUES ('Marek','Kobida');";

  assert.deepStrictEqual(l.toString(), r);
});

test('Insert.returning()', async () => {
  const l = new Insert('account', {
    first_name: 'Marek',
    last_name: 'Kobida',
  }).returning();

  const r = "INSERT INTO \"account\" (first_name,last_name) VALUES ('Marek','Kobida') RETURNING *;";

  assert.deepStrictEqual(l.toString(), r);
});

test('Insert.returning\x1b[33m(Array)\x1b[0m', async () => {
  const l = new Insert('account', {
    first_name: 'Marek',
    last_name: 'Kobida',
  }).returning('first_name', 'last_name');

  const r = "INSERT INTO \"account\" (first_name,last_name) VALUES ('Marek','Kobida') RETURNING first_name,last_name;";

  assert.deepStrictEqual(l.toString(), r);
});
