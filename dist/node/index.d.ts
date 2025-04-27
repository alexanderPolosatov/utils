import { ParseArgsArgSchema, TypeMap } from "./types";
export declare const isDirectory: (fileName: string) => boolean;
export declare function createFolderRecursiveIfNoExist(path: string): void;
export declare function parseArgs<TSchema extends ParseArgsArgSchema>(process: NodeJS.Process): {
    [K in keyof TSchema]: TypeMap[TSchema[K]];
};
