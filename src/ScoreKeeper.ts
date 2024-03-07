import { ScoreFormatter } from "./ScoreFormatter";

export class ScoreKeeper {
  private teamAScore: number;

  constructor() {
    this.teamAScore = 0;
  }

  public getScore(): string {

    // concat 2 scores with ':'

    const formatter = new ScoreFormatter();

    const scoreA = formatter.formatScore(this.teamAScore);

    return `${scoreA}:000`;
  }

  public scoreTeamA1(): void {
    this.teamAScore++;
  }
}
