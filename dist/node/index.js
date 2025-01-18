"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDirectory = void 0;
exports.createFolderRecursiveIfNoExist = createFolderRecursiveIfNoExist;
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
