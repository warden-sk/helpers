/*
 * Copyright 2021 Marek Kobida
 */

import Database from '../Database.js';

class Select {
  #columns: string[] = [];

  #from!: string;

  #leftJoin?: string;

  #where: string[] = [];

  constructor(...columns: string[]) {
    this.#columns = columns;
  }

  from(tableName: string): this {
    this.#from = tableName;

    return this;
  }

  join(tableName: string, l: string, r: string): this {
    this.#leftJoin = `INNER JOIN "${tableName}" ON ${l} = ${r}`;

    return this;
  }

  where(parameters: { [columnName: string]: string }): this {
    Object.entries(Database.test2(parameters, Database.test4)).forEach(([columnName, parameter]) =>
      this.#where.push(`${columnName} = ${Database.escape(parameter)}`)
    );

    return this;
  }

  toString(): string {
    const sql: string[] = [];

    sql.push(`SELECT ${this.#columns.length ? this.#columns.join() : '*'}`);

    sql.push(`FROM "${this.#from}"`);

    if (this.#leftJoin) {
      sql.push(this.#leftJoin);
    }

    if (this.#where.length) {
      sql.push(`WHERE ${this.#where.join(' AND ')}`);
    }

    return `${sql.join(' ')};`;
  }
}

export default Select;
