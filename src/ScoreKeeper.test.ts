import {ScoreKeeper} from './ScoreKeeper';

describe('ScoreKeeper', () => {

    let scoreboard;

    beforeEach(() => {
        scoreboard = new ScoreKeeper();
    });

    it('outputs the initial score', () => {

        const currentScore = scoreboard.getScore();

        expect(currentScore).toBe('000:000');
    });

    it('adds one to team A score', () => {

        scoreboard.scoreTeamA1();

        const currentScore = scoreboard.getScore();

        expect(currentScore).toBe('001:000');
    });

    it('adds one to team B score', () => {

        scoreboard.scoreTeamB1();

        const currentScore = scoreboard.getScore();

        expect(currentScore).toBe('000:001');
    });

    it('adds two to team A score', () => {

        scoreboard.scoreTeamA2();

        const currentScore = scoreboard.getScore();

        expect(currentScore).toBe('002:000');
    });

    it('adds two to team B score', () => {

        scoreboard.scoreTeamB2();

        const currentScore = scoreboard.getScore();

        expect(currentScore).toBe('000:002');
    });
});
