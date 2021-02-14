/*
 * Copyright 2021 Marek Kobida
 */

import Delete from './Delete';
import Insert from './Insert';
import Select from './Select';
import Table from './Table';

class SQL {
  static createTable(name: string, $: (t: Table) => void): string {
    const t = new Table();

    $(t);

    return `CREATE TABLE "${name}" (${t.toString()});`;
  }

  static delete(...$: ConstructorParameters<typeof Delete>): Delete {
    return new Delete(...$);
  }

  static dropTableIfExists(name: string): string {
    return `DROP TABLE IF EXISTS "${name}" CASCADE;`;
  }

  static insert(...$: ConstructorParameters<typeof Insert>): Insert {
    return new Insert(...$);
  }

  static select(...$: ConstructorParameters<typeof Select>): Select {
    return new Select(...$);
  }
}

export default SQL;
