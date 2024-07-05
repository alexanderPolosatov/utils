function getTwoLettersString(value: number): string {
    return value
        .toString()
        .padStart(2, '0');
}

export function getDateString(date: Date): string {
    const year = date.getFullYear();
    const month = getTwoLettersString(date.getMonth() + 1);
    const day = getTwoLettersString(date.getDate());
    const hour = getTwoLettersString(date.getHours());
    const min = getTwoLettersString(date.getMinutes());
    const sec = getTwoLettersString(date.getSeconds());

    return `${year}_${month}_${day}_${hour}_${min}_${sec}`;
}
