import { existsSync, lstatSync, mkdirSync } from "fs";

export const isDirectory = (fileName: string) => {
    return lstatSync(fileName).isDirectory();
};

export function createFolderRecursiveIfNoExist(path: string) {
    if (!existsSync(path)) {
        mkdirSync(path, { recursive: true });
    }
}
