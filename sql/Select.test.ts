/*
 * Copyright 2021 Marek Kobida
 */

import Select from './Select';
import assert from 'assert';
import { test } from '../test';

test('new Select()', async () => {
  const l = new Select().from('account');

  const r = 'SELECT * FROM "account";';

  assert.deepStrictEqual(l.toString(), r);
});

test('new Select\x1b[33m(Array)\x1b[0m', async () => {
  const l = new Select('first_name', 'last_name').from('account');

  const r = 'SELECT first_name,last_name FROM "account";';

  assert.deepStrictEqual(l.toString(), r);
});

test('Select.join()', async () => {
  const l = new Select().from('account').join('account_permission', 'account.id', 'account_permission.account_id');

  const r = 'SELECT * FROM "account" INNER JOIN "account_permission" ON account.id = account_permission.account_id;';

  assert.deepStrictEqual(l.toString(), r);
});

test('Select.where\x1b[33m(Object)\x1b[0m', async () => {
  const l = new Select().from('account').where({ first_name: 'Marek', last_name: 'Kobida' });

  const r = "SELECT * FROM \"account\" WHERE first_name = 'Marek' AND last_name = 'Kobida';";

  assert.deepStrictEqual(l.toString(), r);
});
