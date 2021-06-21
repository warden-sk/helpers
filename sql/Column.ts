/*
 * Copyright 2021 Marek Kobida
 */

import Database from '../Database.js';

class Column {
  #constraints: string[] = [];

  #type!: string;

  constructor(private name: string) {}

  private addConstraint(constraint: string): string[] {
    return (this.#constraints = [...this.#constraints, constraint]);
  }

  character(length: number): this {
    this.#type = `CHARACTER (${length})`;

    return this;
  }

  characterVarying(length: number): this {
    this.#type = `CHARACTER VARYING (${length})`;

    return this;
  }

  default(parameter: string): this {
    this.addConstraint(`DEFAULT ${Database.escape(parameter)}`);

    return this;
  }

  notNull(): this {
    this.addConstraint('NOT NULL');

    return this;
  }

  primaryKey(): this {
    this.addConstraint('PRIMARY KEY');

    return this;
  }

  references(tableName: string, columnName: string): this {
    this.addConstraint(`REFERENCES "${tableName}" (${columnName})`);

    return this;
  }

  timestamp(withTimeZone: boolean): this {
    if (withTimeZone) {
      this.#type = 'TIMESTAMP WITH TIME ZONE';
    } else {
      this.#type = 'TIMESTAMP';
    }

    return this;
  }

  unique(): this {
    this.addConstraint('UNIQUE');

    return this;
  }

  uuid(): this {
    this.#type = 'UUID';

    return this;
  }

  toString(): string {
    const sql: string[] = [this.name, this.#type, ...this.#constraints];

    return sql.join(' ');
  }
}

export default Column;
