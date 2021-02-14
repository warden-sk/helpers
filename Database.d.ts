declare class Database {
    #private;
    private uri;
    constructor(uri: string);
    static escape(_1: string): string;
    query(_1: {
        toString(): string;
    }): Promise<any[]>;
    static test1<T extends {
        [column: string]: any;
    }[]>(_1: T): T;
    static test2<T extends {
        [column: string]: any;
    }>(_1: T, _2?: (_1: string) => string): T;
    static test3(_1: string): string;
    static test4(_1: string): string;
}
export default Database;
