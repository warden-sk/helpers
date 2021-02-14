/*
 * Copyright 2021 Marek Kobida
 */

import Database from '../Database';

class Delete {
  #from!: string;

  #returning?: string[];

  #where: string[] = [];

  from(tableName: string): this {
    this.#from = tableName;

    return this;
  }

  returning(...columns: string[]): this {
    this.#returning = columns;

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

    sql.push(`DELETE FROM "${this.#from}"`);

    if (this.#where.length) {
      sql.push(`WHERE ${this.#where.join(' AND ')}`);
    }

    if (this.#returning) {
      sql.push(`RETURNING ${this.#returning.length ? this.#returning.join() : '*'}`);
    }

    return `${sql.join(' ')};`;
  }
}

export default Delete;
