import { existsSync, lstatSync, mkdirSync } from "fs";
import { ParseArgsArgSchema, TypeMap } from "./types";

export const isDirectory = (fileName: string) => {
    return lstatSync(fileName).isDirectory();
};

export function createFolderRecursiveIfNoExist(path: string) {
    if (!existsSync(path)) {
        mkdirSync(path, { recursive: true });
    }
}

export function parseArgs<TSchema extends ParseArgsArgSchema>(process: NodeJS.Process): { [K in keyof TSchema]: TypeMap[TSchema[K]] } {
    const args = process.argv.slice(2);
    const parsedArgs: Record<string, unknown> = {};

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];

        if (arg.startsWith('--')) {
            const key = arg.slice(2);
            const nextArg = args[i + 1];

            if (!nextArg || nextArg.startsWith('--')) {
                parsedArgs[key] = true;
            } else {
                parsedArgs[key] = nextArg;
                i++;
            }
        }
    }

    return parsedArgs as { [K in keyof TSchema]: TypeMap[TSchema[K]] };
}
