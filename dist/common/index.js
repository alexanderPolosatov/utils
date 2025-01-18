"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wait = void 0;
exports.getMinLenString = getMinLenString;
exports.getDateString = getDateString;
function getMinLenString(value, minLength, contentToFillString) {
    return value
        .toString()
        .padStart(minLength, contentToFillString);
}
function getDateString(date) {
    const getTwoLettersString = (value) => getMinLenString(value, 2, '0');
    const year = date.getFullYear();
    const month = getTwoLettersString(date.getMonth() + 1);
    const day = getTwoLettersString(date.getDate());
    const hour = getTwoLettersString(date.getHours());
    const min = getTwoLettersString(date.getMinutes());
    const sec = getTwoLettersString(date.getSeconds());
    return `${year}_${month}_${day}_${hour}_${min}_${sec}`;
}
const wait = (timerLen) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, timerLen);
    });
};
exports.wait = wait;
