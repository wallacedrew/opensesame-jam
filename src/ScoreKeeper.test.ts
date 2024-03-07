import {ScoreKeeper} from './ScoreKeeper';

describe('ScoreKeeper', () => {
  it('outputs the initial score', () => {
    const scoreboard = new ScoreKeeper();

    const currentScore = scoreboard.getScore();

    expect(currentScore).toBe('000:000')
  })
});
