"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDirectory = void 0;
exports.createFolderRecursiveIfNoExist = createFolderRecursiveIfNoExist;
exports.parseArgs = parseArgs;
const fs_1 = require("fs");
const isDirectory = (fileName) => {
    return (0, fs_1.lstatSync)(fileName).isDirectory();
};
exports.isDirectory = isDirectory;
function createFolderRecursiveIfNoExist(path) {
    if (!(0, fs_1.existsSync)(path)) {
        (0, fs_1.mkdirSync)(path, { recursive: true });
    }
}
function parseArgs(process) {
    const args = process.argv.slice(2);
    const parsedArgs = {};
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (arg.startsWith('--')) {
            const key = arg.slice(2);
            const nextArg = args[i + 1];
            if (!nextArg || nextArg.startsWith('--')) {
                parsedArgs[key] = true;
            }
            else {
                parsedArgs[key] = nextArg;
                i++;
            }
        }
    }
    return parsedArgs;
}
