import { lstatSync } from "fs";

export const isDirectory = (fileName: string) => {
    return lstatSync(fileName).isDirectory();
};
