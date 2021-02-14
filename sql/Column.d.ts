declare class Column {
    #private;
    private name;
    constructor(name: string);
    private addConstraint;
    character(length: number): this;
    characterVarying(length: number): this;
    default(parameter: string): this;
    notNull(): this;
    primaryKey(): this;
    references(tableName: string, columnName: string): this;
    timestamp(withTimeZone: boolean): this;
    unique(): this;
    uuid(): this;
    toString(): string;
}
export default Column;
