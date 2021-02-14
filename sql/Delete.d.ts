declare class Delete {
    #private;
    from(tableName: string): this;
    returning(...columns: string[]): this;
    where(parameters: {
        [columnName: string]: string;
    }): this;
    toString(): string;
}
export default Delete;
