import { getDateString } from '../src/common';

describe('getDateString', () => {
    it('should format date correctly', () => {
        const date = new Date(2024, 3, 5, 9, 7, 3);
        expect(getDateString(date)).toBe('2024_04_05_09_07_03');
    });

    it('should format double-digit values correctly', () => {
        const date = new Date(2024, 10, 12, 15, 45, 59);
        expect(getDateString(date)).toBe('2024_11_12_15_45_59');
    });

    it('should pad single digit values with zeros', () => {
        const date = new Date(2024, 0, 1, 0, 0, 0);
        expect(getDateString(date)).toBe('2024_01_01_00_00_00');
    });

    it('should handle end of year dates', () => {
        const date = new Date(2024, 11, 31, 23, 59, 59);
        expect(getDateString(date)).toBe('2024_12_31_23_59_59');
    });
});
