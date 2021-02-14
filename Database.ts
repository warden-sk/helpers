/*
 * Copyright 2021 Marek Kobida
 */

import pg from 'pg';

class Database {
  #client = new pg.Pool({ connectionString: this.uri });

  constructor(private uri: string) {}

  // ?
  static escape(_1: string): string {
    const _2 = [/CURRENT_TIMESTAMP/, /\(/];

    return _2.some(_3 => _3.test(_1)) ? _1 : `'${_1}'`;
  }

  // ?
  async query(_1: { toString(): string }): Promise<any[]> {
    const _2 = await this.#client.query(_1.toString());

    return Database.test1(_2.rows);
  }

  // ?
  static test1<T extends { [column: string]: any }[]>(_1: T): T {
    return _1.map(_2 => this.test2(_2)) as T;
  }

  // ?
  static test2<T extends { [column: string]: any }>(_1: T, _2: (_1: string) => string = this.test3): T {
    return Object.keys(_1).reduce((_3, _4) => ({ ..._3, [_2(_4)]: _1[_4] }), {}) as T;
  }

  // ?
  static test3(_1: string): string {
    return _1.replace(/_([a-z])/g, (_2, _3) => _3.toUpperCase());
  }

  // ?
  static test4(_1: string): string {
    return _1.replace(/([A-Z])/g, (_2, _3) => `_${_3.toLowerCase()}`);
  }
}

export default Database;
