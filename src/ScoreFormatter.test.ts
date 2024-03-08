import {ScoreFormatter} from './ScoreFormatter';

describe('ScoreFormatter', () => {
    let scoreFormatter: ScoreFormatter;

    beforeEach(() => {
        scoreFormatter = new ScoreFormatter();
    });

    it('format 1 point with leading zeros to 3 characters', () => {

        const score = scoreFormatter.formatScore(1);

        expect(score).toBe('001');
    });

    it('format 2 points with leading zeros to 3 characters', () => {

        const score = scoreFormatter.formatScore(2);

        expect(score).toBe('002');
    });

    it('format 10 points with leading zeros to 3 characters', () => {

        const score = scoreFormatter.formatScore(10);

        expect(score).toBe('010');
    });

    it('format 100 points with leading zeros to 3 characters', () => {

        const score = scoreFormatter.formatScore(100);

        expect(score).toBe('100');
    });

    it('format 1000 points with to return 000', () => {

        const score = scoreFormatter.formatScore(1000);

        expect(score).toBe('000');
    });
});
