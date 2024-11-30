export function getMinLenString(value: number, minLength: number, contentToFillString: string): string {
    return value
        .toString()
        .padStart(minLength, contentToFillString);
}

export function getDateString(date: Date): string {
    const getTwoLettersString = (value: number) => getMinLenString(value, 2, '0');
    const year = date.getFullYear();

    const month = getTwoLettersString(date.getMonth() + 1);
    const day = getTwoLettersString(date.getDate());
    const hour = getTwoLettersString(date.getHours());
    const min = getTwoLettersString(date.getMinutes());
    const sec = getTwoLettersString(date.getSeconds());

    return `${year}_${month}_${day}_${hour}_${min}_${sec}`;
}

export const wait = (timerLen: number) => {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, timerLen);
    });
};
