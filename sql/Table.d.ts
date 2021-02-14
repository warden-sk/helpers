import Column from './Column';
declare class Table {
    #private;
    private addColumn;
    character(columnName: string, length: number): Column;
    characterVarying(columnName: string, length: number): Column;
    column(columnName: string): Column;
    createdAt(): Column;
    id(): Column;
    timestamp(columnName: string, withTimeZone: boolean): Column;
    uuid(columnName: string): Column;
    toString(): string;
}
export default Table;
