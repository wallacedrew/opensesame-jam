import {ScoreFormatter} from './ScoreFormatter';

describe('ScoreFormatter', () => {
    let formatter: ScoreFormatter;

    beforeEach(() => {
        formatter = new ScoreFormatter();
    });

    it('format 1 point with leading zeros to 3 characters', () => {
        expect(formatter.format(1)).toBe('001');
    });

    it('format 2 points with leading zeros to 3 characters', () => {
        expect(formatter.format(2)).toBe('002');
    });

    it('format 10 points with leading zeros to 3 characters', () => {
        expect(formatter.format(10)).toBe('010');
    });

    it('format 100 points with leading zeros to 3 characters', () => {
        expect(formatter.format(100)).toBe('100');
    });

    it('format 1000 points with to return 000', () => {
        expect(formatter.format(1000)).toBe('000');
    });
});
