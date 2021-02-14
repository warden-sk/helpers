import Delete from './Delete';
import Insert from './Insert';
import Select from './Select';
import Table from './Table';
declare class SQL {
    static createTable(name: string, $: (t: Table) => void): string;
    static delete(...$: ConstructorParameters<typeof Delete>): Delete;
    static dropTableIfExists(name: string): string;
    static insert(...$: ConstructorParameters<typeof Insert>): Insert;
    static select(...$: ConstructorParameters<typeof Select>): Select;
}
export default SQL;
