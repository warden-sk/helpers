/*
 * Copyright 2021 Marek Kobida
 */

import Database from '../Database';

class Insert {
  #returning?: string[];

  constructor(private tableName: string, private parameters: { [columnName: string]: string }) {}

  returning(...columns: string[]): this {
    this.#returning = columns;

    return this;
  }

  toString(): string {
    const sql: string[] = [];

    sql.push(`INSERT INTO "${this.tableName}"`);

    const l = Object.keys(Database.test2(this.parameters, Database.test4));

    sql.push(`(${l.join()})`);

    const r = Object.values(this.parameters).map(parameter => Database.escape(parameter));

    sql.push(`VALUES (${r.join()})`);

    if (this.#returning) {
      sql.push(`RETURNING ${this.#returning.length ? this.#returning.join() : '*'}`);
    }

    return `${sql.join(' ')};`;
  }
}

export default Insert;
