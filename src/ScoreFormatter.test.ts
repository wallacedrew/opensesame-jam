import {ScoreFormatter} from './ScoreFormatter';

describe('ScoreFormatter', () => {
    it('format scores with leading zeros to 3 characters', () => {

        const scoreFormatter = new ScoreFormatter();

        const score = scoreFormatter.formatScore(1);

        expect(score).toBe('001');
    });
});
