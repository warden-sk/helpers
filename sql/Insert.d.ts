declare class Insert {
    #private;
    private tableName;
    private parameters;
    constructor(tableName: string, parameters: {
        [columnName: string]: string;
    });
    returning(...columns: string[]): this;
    toString(): string;
}
export default Insert;
