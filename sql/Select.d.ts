declare class Select {
    #private;
    constructor(...columns: string[]);
    from(tableName: string): this;
    join(tableName: string, l: string, r: string): this;
    where(parameters: {
        [columnName: string]: string;
    }): this;
    toString(): string;
}
export default Select;
