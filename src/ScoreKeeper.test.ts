import {ScoreKeeper} from './ScoreKeeper';

describe('ScoreKeeper', () => {
    it('outputs the initial score', () => {
        const scoreboard = new ScoreKeeper();

        const currentScore = scoreboard.getScore();

        expect(currentScore).toBe('000:000');
    });

    it('adds one to team A score', () => {
        const scoreboard = new ScoreKeeper();

        scoreboard.scoreTeamA1();

        const currentScore = scoreboard.getScore();

        expect(currentScore).toBe('001:000');
    });

    it('adds one to team B score', () => {
        const scoreboard = new ScoreKeeper();

        scoreboard.scoreTeamB1();

        const currentScore = scoreboard.getScore();

        expect(currentScore).toBe('000:001');
    });
});
