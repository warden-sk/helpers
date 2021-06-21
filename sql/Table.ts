/*
 * Copyright 2021 Marek Kobida
 */

import Column from './Column.js';

class Table {
  #columns: Column[] = [];

  private addColumn(column: Column): Column[] {
    return (this.#columns = [...this.#columns, column]);
  }

  character(columnName: string, length: number): Column {
    const column = new Column(columnName).character(length);

    this.addColumn(column);

    return column;
  }

  characterVarying(columnName: string, length: number): Column {
    const column = new Column(columnName).characterVarying(length);

    this.addColumn(column);

    return column;
  }

  column(columnName: string): Column {
    const column = new Column(columnName);

    this.addColumn(column);

    return column;
  }

  createdAt(): Column {
    const column = this.timestamp('created_at', true).default('CURRENT_TIMESTAMP').notNull();

    return column;
  }

  id(): Column {
    const column = this.uuid('id').default('gen_random_uuid()').notNull().primaryKey();

    return column;
  }

  timestamp(columnName: string, withTimeZone: boolean): Column {
    const column = new Column(columnName).timestamp(withTimeZone);

    this.addColumn(column);

    return column;
  }

  uuid(columnName: string): Column {
    const column = new Column(columnName).uuid();

    this.addColumn(column);

    return column;
  }

  toString(): string {
    return this.#columns.join();
  }
}

export default Table;
