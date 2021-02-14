interface Tests {
    [i: number]: [testName: string, testFunction: () => Promise<void>];
    length: number;
}
export declare function t(i: number, tests: Tests): Promise<void>;
export declare function test(...test: Tests[0]): void;
export declare const tests: Tests;
export {};
