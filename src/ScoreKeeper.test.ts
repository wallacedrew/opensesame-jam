import {ScoreKeeper} from './ScoreKeeper';

describe('ScoreKeeper', () => {

    let keeper;

    beforeEach(() => {
        keeper = new ScoreKeeper();
    });

    it('outputs the initial score', () => {
        expect(keeper.getScore()).toBe('000:000');
    });

    it('adds one to team A score', () => {
        keeper.scoreTeamA1();
        expect(keeper.getScore()).toBe('001:000');
    });

    it('adds one to team B score', () => {
        keeper.scoreTeamB1();
        expect(keeper.getScore()).toBe('000:001');
    });

    it('adds two to team A score', () => {
        keeper.scoreTeamA2();
        expect(keeper.getScore()).toBe('002:000');
    });

    it('adds two to team B score', () => {
        keeper.scoreTeamB2();
        expect(keeper.getScore()).toBe('000:002');
    });

    it('adds three to team A score', () => {
        keeper.scoreTeamA3();
        expect(keeper.getScore()).toBe('003:000');
    });

    it('adds three to team B score', () => {
        keeper.scoreTeamB3();
        expect(keeper.getScore()).toBe('000:003');
    });

    it('displays 000 if the score is 1000', () => {
        for (let i = 0; i < 1000; i++) {
            keeper.scoreTeamA1();
        }
        expect(keeper.getScore()).toBe('000:000');
    });

    it('displays score tied at 999', () => {
        for (let i = 0; i < 333; i++) {
            keeper.scoreTeamA3();
            keeper.scoreTeamB3();
        }
        expect(keeper.getScore()).toBe('999:999');
    });

});
